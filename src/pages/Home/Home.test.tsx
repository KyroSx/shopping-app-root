import { getByText, screen, waitFor } from '@testing-library/react';
import { Home } from '@/pages/Home/Home';
import { renderWithProviders } from '@/utils/testing';
import {
  mockGetProductsService,
  mockGetProductsServiceToThrow,
} from '@/utils/testing/mocks/services/getProducts';
import { makeProducts } from '@/utils/testing/factories/products';
import { Texts } from '@/ui/craft/texts';
import { formatMoney } from '@/utils/formatting';

jest.mock('@/services/products/getProducts');

describe(Home, () => {
  const renderHome = () => {
    const home = renderWithProviders(Home, {});

    return { home };
  };

  beforeEach(() => {
    jest.resetAllMocks();
  });

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
          formatMoney(product.price),
        );
        expect(priceElement).toBeInTheDocument();

        const availableElement = getByText(
          productContainer,
          `${product.available} left`,
        );
        expect(availableElement).toBeInTheDocument();
      });
    });
  });

  it('renders error descriptions if error happens', async () => {
    mockGetProductsServiceToThrow();
    renderHome();

    await waitFor(() => {
      expect(
        screen.getByText(Texts.global.error.unexpected),
      ).toBeInTheDocument();
    });
  });

  it('renders loading text', async () => {
    mockGetProductsService(makeProducts());
    renderHome();

    const loadingText = screen.getByText(Texts.global.loading.text);
    expect(loadingText).toBeInTheDocument();

    await waitFor(() => {
      const loading = screen.queryByText(Texts.global.loading.text);
      expect(loading).not.toBeInTheDocument();
    });
  });
});
