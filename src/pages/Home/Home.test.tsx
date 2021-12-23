import { getByText, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Home } from '@/pages/Home/Home';
import { renderWithProviders } from '@/utils/testing';
import {
  mockGetProductsService,
  mockGetProductsServiceToThrow,
} from '@/utils/testing/mocks/services/getProducts';
import { makeProducts } from '@/utils/testing/factories/products';
import { Texts } from '@/ui/craft/texts';
import { formatMoney } from '@/utils/formatting';
import { decrement } from '@/utils/math';

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
          Texts.productCard.available(product.available),
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

    const loadingText = await screen.findByText(Texts.global.loading.text);
    expect(loadingText).toBeInTheDocument();

    await waitFor(() => {
      const loading = screen.queryByText(Texts.global.loading.text);
      expect(loading).not.toBeInTheDocument();
    });
  });

  describe('add product to cart', () => {
    it('reduces available when add product to cart', async () => {
      const products = makeProducts();
      const [product] = products;
      mockGetProductsService(products);
      renderHome();

      await waitFor(() => {
        const productContainer = screen.getByTestId(product.id);

        const buyButton = getByText(
          productContainer,
          Texts.productCard.button.text,
        );
        userEvent.click(buyButton);

        const availableElement = getByText(
          productContainer,
          Texts.productCard.available(decrement(product.available)),
        );
        expect(availableElement).toBeInTheDocument();
      });
    });
  });
});
