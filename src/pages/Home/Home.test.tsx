import { getByText, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Home } from '@/pages/Home/Home';
import { renderWithProviders } from '@/utils/testing';
import {
  mockGetProductsService,
  mockGetProductsServiceToThrow,
} from '@/utils/testing/mocks/services/getProducts';
import {
  makeProducts,
  makeProductsUnavailable,
} from '@/utils/testing/factories/products';
import { Texts } from '@/ui/craft/texts';
import { formatMoney } from '@/utils/formatting';
import { decrement } from '@/utils/math';
import { ProductInCart } from '@/ui/hooks/useCart';
import { Product, Products } from '@/services/products';

jest.mock('@/services/products/getProducts');

describe(Home, () => {
  const renderHome = () => {
    const home = renderWithProviders(Home, {});

    return { home };
  };

  const renderHomeAndMockService = (initialProducts?: Products) => {
    const products = initialProducts || makeProducts();
    mockGetProductsService(products);
    renderHome();

    return {
      products,
    };
  };

  const getProductContainer = (id: number) =>
    screen.getByTestId(Texts.productCard.testId(id));

  const getProductInCartContainer = (id: number) =>
    screen.getByTestId(Texts.cart.product.testId(id));

  const queryProductInCartContainer = (id: number) =>
    screen.queryByTestId(Texts.cart.product.testId(id));

  const getAvailableElement =
    (productContainer: HTMLElement) => (available: number) =>
      getByText(productContainer, Texts.productCard.available(available));

  function buyProduct(product: ProductInCart | Product) {
    const productContainer = getProductContainer(product.id);

    const buyButton = getByText(
      productContainer,
      Texts.productCard.button.text(),
    );
    userEvent.click(buyButton);

    return {
      productContainer,
      buyButton,
    };
  }

  function buyProductByCart(product: ProductInCart | Product) {
    const productContainer = getProductInCartContainer(product.id);

    const buyButton = getByText(
      productContainer,
      Texts.cart.product.button.add(),
    );
    userEvent.click(buyButton);

    return {
      productContainer,
      buyButton,
    };
  }

  beforeEach(jest.resetAllMocks);

  describe('product list', () => {
    it('renders product list', async () => {
      const { products } = renderHomeAndMockService();

      await waitFor(() => {
        products.forEach(product => {
          const productContainer = getProductContainer(product.id);
          expect(productContainer).toBeInTheDocument();

          const nameElement = getByText(productContainer, product.name);
          expect(nameElement).toBeInTheDocument();

          const priceElement = getByText(
            productContainer,
            formatMoney(product.price),
          );
          expect(priceElement).toBeInTheDocument();

          const availableElement = getAvailableElement(productContainer)(
            product.available,
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
          screen.getByText(Texts.global.error.unexpected()),
        ).toBeInTheDocument();
      });
    });

    it('renders loading text', async () => {
      renderHomeAndMockService();

      const loadingText = await screen.findByText(Texts.global.loading.text());
      expect(loadingText).toBeInTheDocument();

      await waitFor(() => {
        const loading = screen.queryByText(Texts.global.loading.text());
        expect(loading).not.toBeInTheDocument();
      });
    });

    describe('add product to cart', () => {
      it('reduces available when add product to cart', async () => {
        const { products } = renderHomeAndMockService();
        const [product] = products;

        await waitFor(() => {
          const { productContainer } = buyProduct(product);

          const availableElement = getAvailableElement(productContainer)(
            decrement(product.available),
          );
          expect(availableElement).toBeInTheDocument();
        });
      });

      it('does not reduces available when product is unavailable', async () => {
        const { products } = renderHomeAndMockService(
          makeProductsUnavailable(),
        );
        const [product] = products;

        await waitFor(() => {
          const { productContainer } = buyProduct(product);
          buyProduct(product);
          buyProduct(product);

          const availableElement = getAvailableElement(productContainer)(
            product.available,
          );
          expect(availableElement).toBeInTheDocument();
        });
      });
    });
  });

  describe('cart', () => {
    it('render product when it was bought', async () => {
      const { products } = renderHomeAndMockService();
      const [productToBeBought] = products;

      await waitFor(() => {
        buyProduct(productToBeBought);

        const productToBeBoughtElement = getProductInCartContainer(
          productToBeBought.id,
        );
        expect(productToBeBoughtElement).toBeInTheDocument();
      });
    });

    it('does not render product when it was not bought', async () => {
      const { products } = renderHomeAndMockService();
      const [productToBeBought, productNotBought] = products;

      await waitFor(() => {
        buyProduct(productToBeBought);

        const productNotBoughtElement = queryProductInCartContainer(
          productNotBought.id,
        );
        expect(productNotBoughtElement).not.toBeInTheDocument();
      });
    });

    it('renders info from bought products', async () => {
      const { products } = renderHomeAndMockService();
      const boughtProducts = [products[0], products[1]];

      await waitFor(() => {
        boughtProducts.forEach(product => {
          const quantity = 1;
          buyProduct(product);

          const productContainer = getProductInCartContainer(product.id);

          const quantityElement = getByText(
            productContainer,
            Texts.cart.product.quantity(quantity),
          );
          expect(quantityElement).toBeInTheDocument();

          const selfSubtotalElement = getByText(
            productContainer,
            formatMoney(product.price * quantity),
          );
          expect(selfSubtotalElement).toBeInTheDocument();
        });
      });
    });

    it('increments product quantity if it is in the cart', async () => {
      const { products } = renderHomeAndMockService();
      const [productToBeBought] = products;

      await waitFor(() => {
        const quantity = 2;
        buyProduct(productToBeBought);
        const { productContainer } = buyProductByCart(productToBeBought);

        const quantityElement = getByText(
          productContainer,
          Texts.cart.product.quantity(quantity),
        );
        expect(quantityElement).toBeInTheDocument();
      });
    });
  });
});
