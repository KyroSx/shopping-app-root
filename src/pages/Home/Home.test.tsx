import { getByText, screen, waitFor } from '@testing-library/react';
import { Home } from '@/pages/Home/Home';
import { renderWithProviders } from '@/utils/testing';
import { mockGetProductsService } from '@/utils/testing/mocks/services/getProducts';
import { makeProducts } from '@/utils/testing/factories/products';

jest.mock('@/services/products/getProducts');

describe(Home, () => {
  const renderHome = () => {
    const home = renderWithProviders(Home, {});

    return { home };
  };

  it('renders product list', async () => {
    const products = makeProducts();
    mockGetProductsService(products);
    renderHome();

    await waitFor(() => {
      products.forEach(product => {
        const productContainer = screen.getByTestId(product.id);
        expect(productContainer).toBeInTheDocument();

        const nameElement = getByText(productContainer, product.name);
        expect(nameElement).toBeInTheDocument();

        const priceElement = getByText(
          productContainer,
          `price:${product.price}`,
        );
        expect(priceElement).toBeInTheDocument();

        const availableElement = getByText(
          productContainer,
          `available:${product.available}`,
        );
        expect(availableElement).toBeInTheDocument();
      });
    });
  });
});
