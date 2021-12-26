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

  const getQuantityElement =
    (productContainer: HTMLElement) => (quantity: number) =>
      getByText(productContainer, Texts.cart.product.quantity(quantity));

  const getBuyButton = (productContainer: HTMLElement) =>
    getByText(productContainer, Texts.productCard.button.text());

  const getBuyByCartButton = (productContainer: HTMLElement) =>
    getByText(productContainer, Texts.cart.product.button.add());

  function buyProduct(product: ProductInCart | Product) {
    const productContainer = getProductContainer(product.id);
    const buyButton = getBuyButton(productContainer);
    userEvent.click(buyButton);
  }

  function buyProductByCart(product: ProductInCart | Product) {
    const productContainer = getProductInCartContainer(product.id);
    const buyButton = getBuyByCartButton(productContainer);
    userEvent.click(buyButton);
  }

  function removeProductByCart(product: ProductInCart | Product) {
    const productContainer = getProductInCartContainer(product.id);

    const removeButton = getByText(
      productContainer,
      Texts.cart.product.button.remove(),
    );

    userEvent.click(removeButton);
  }

  beforeEach(jest.resetAllMocks);

  describe('Layout', () => {
    it('renders header text', async () => {
      renderHomeAndMockService();

      await waitFor(() => {
        const header = screen.getByText(Texts.global.layout.header.text());
        expect(header).toBeInTheDocument();
      });
    });

    it('renders user text', async () => {
      renderHomeAndMockService();

      await waitFor(() => {
        const header = screen.getByText(Texts.global.layout.header.user());
        expect(header).toBeInTheDocument();
      });
    });
  });

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
          buyProduct(product);

          const productContainer = getProductContainer(product.id);
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
          buyProduct(product);
          buyProduct(product);
          buyProduct(product);

          const productContainer = getProductContainer(product.id);
          const availableElement = getAvailableElement(productContainer)(
            product.available,
          );
          expect(availableElement).toBeInTheDocument();

          const buyButton = getBuyButton(productContainer);
          expect(buyButton).toBeDisabled();
        });
      });
    });
  });

  describe('cart', () => {
    it('render product when it was bought', async () => {
      const { products } = renderHomeAndMockService();
      const [product] = products;

      await waitFor(() => {
        buyProduct(product);

        const productElement = getProductInCartContainer(product.id);
        expect(productElement).toBeInTheDocument();
      });
    });

    it('does not render product when it was not bought', async () => {
      const { products } = renderHomeAndMockService();
      const [product, productToNotBeBought] = products;

      await waitFor(() => {
        buyProduct(product);

        const productToNotBeBoughtElement = queryProductInCartContainer(
          productToNotBeBought.id,
        );
        expect(productToNotBeBoughtElement).not.toBeInTheDocument();
      });
    });

    it('renders info from bought products', async () => {
      const { products } = renderHomeAndMockService();
      const boughtProducts = [products[0], products[1]];
      const quantity = 1;

      await waitFor(() => {
        boughtProducts.forEach(product => {
          buyProduct(product);

          const productContainer = getProductInCartContainer(product.id);

          const quantityElement =
            getQuantityElement(productContainer)(quantity);
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
      const {
        products: [product],
      } = renderHomeAndMockService();
      const quantity = 2;

      await waitFor(() => {
        buyProduct(product);
        buyProductByCart(product);

        const productContainer = getProductInCartContainer(product.id);
        const quantityElement = getQuantityElement(productContainer)(quantity);
        expect(quantityElement).toBeInTheDocument();
      });
    });

    it('does not increment product quantity if it is unavailable', async () => {
      const {
        products: [, productToBeBought],
      } = renderHomeAndMockService(makeProductsUnavailable());
      const quantity = 1;

      await waitFor(() => {
        buyProduct(productToBeBought);
        buyProductByCart(productToBeBought);

        const productContainer = getProductInCartContainer(
          productToBeBought.id,
        );
        const quantityElement = getQuantityElement(productContainer)(quantity);
        expect(quantityElement).toBeInTheDocument();

        const buyButton = getBuyByCartButton(productContainer);
        expect(buyButton).toBeDisabled();
      });
    });

    it('removes product if it has no quantity', async () => {
      const {
        products: [product],
      } = renderHomeAndMockService();

      await waitFor(() => {
        buyProduct(product);
        removeProductByCart(product);

        const productInCartElement = queryProductInCartContainer(product.id);
        expect(productInCartElement).not.toBeInTheDocument();
      });
    });
  });
});
