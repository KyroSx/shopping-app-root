/* eslint-disable no-shadow */
import { getByText, screen, waitFor } from '@testing-library/react';
import { Home } from '@/pages/Home/Home';
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
import { decrement, sub, sum } from '@/utils/math';
import { Product, ProductInCart, Products } from '@/types';
import { Shipping } from '@/constants';
import { Events } from '@/utils/testing/events';
import { Screen } from '@/utils/testing/screen';
import { makeVouchers } from '@/utils/testing/factories/vouchers';
import { mockGetVouchersService } from '@/utils/testing/mocks/services/getVouchers';
import { decrease, discount } from '@/utils/math/percentage';

jest.mock('@/services/products/getProducts');
jest.mock('@/services/vouchers/getVouchers');

describe(Home, () => {
  const renderHome = () => {
    const home = Screen.renderWithProviders(Home);

    return { home };
  };

  const renderHomeAndMockService = (initialProducts?: Products) => {
    const products: Products = initialProducts || makeProducts();
    const vouchers = makeVouchers();

    mockGetProductsService(products);
    mockGetVouchersService(vouchers);
    renderHome();

    return {
      products,
      vouchers,
    };
  };

  const setUpError = () => {
    mockGetProductsServiceToThrow();
    renderHome();
  };

  const setUpSuccess = () => {
    const { products, vouchers } = renderHomeAndMockService();
    const [product, product2, product3] = products;
    const [percentualVoucher, fixedVoucher, shippingVoucher] = vouchers;

    return {
      vouchers,
      percentualVoucher,
      fixedVoucher,
      shippingVoucher,

      products,
      product,
      product1: product,
      product2,
      product3,
    };
  };

  const setUpSuccessUnavailable = () => {
    const { products } = renderHomeAndMockService(makeProductsUnavailable());
    const [product, product2] = products;

    return {
      products,
      product,
      product2,
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

  const getTotalElement = (total: number) => {
    const container = screen.getByTestId('financial@total');

    return getByText(container, formatMoney(total));
  };

  const getSubtotalElement = (subtotal: number) => {
    const container = screen.getByTestId('financial@subtotal');

    return getByText(container, formatMoney(subtotal));
  };

  const getShippingElement = (shipping: number) => {
    const container = screen.getByTestId('financial@shipping');

    return getByText(container, formatMoney(shipping));
  };

  function buyProduct(product: ProductInCart | Product) {
    const productContainer = getProductContainer(product.id);
    const buyButton = getBuyButton(productContainer);
    Events.clickOn(buyButton);
  }

  function buyProductTimes(product: ProductInCart | Product) {
    const productContainer = getProductContainer(product.id);
    const buyButton = getBuyButton(productContainer);

    return (times: number) => {
      Array.from({ length: times }).forEach(() => Events.clickOn(buyButton));
    };
  }

  function buyProductByCart(product: ProductInCart | Product) {
    const productContainer = getProductInCartContainer(product.id);
    const buyButton = getBuyByCartButton(productContainer);
    Events.clickOn(buyButton);
  }

  function removeProductByCart(product: ProductInCart | Product) {
    const productContainer = getProductInCartContainer(product.id);

    const removeButton = getByText(
      productContainer,
      Texts.cart.product.button.remove(),
    );

    Events.clickOn(removeButton);
  }

  beforeEach(jest.resetAllMocks);

  describe('Layout', () => {
    it('renders header text', async () => {
      setUpSuccess();

      await waitFor(() => {
        const header = screen.getByText(Texts.global.layout.header.text());
        expect(header).toBeInTheDocument();
      });
    });

    it('renders user text', async () => {
      setUpSuccess();

      await waitFor(() => {
        const header = screen.getByText(Texts.global.layout.header.user());
        expect(header).toBeInTheDocument();
      });
    });
  });

  describe('product list', () => {
    it('renders product list', async () => {
      const { products } = setUpSuccess();

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
      setUpError();

      await waitFor(() => {
        expect(
          screen.getByText(Texts.global.error.unexpected()),
        ).toBeInTheDocument();
      });
    });

    it('renders loading text', async () => {
      setUpSuccess();

      const loadingText = await screen.findByText(Texts.global.loading.text());
      expect(loadingText).toBeInTheDocument();

      await waitFor(() => {
        const loading = screen.queryByText(Texts.global.loading.text());
        expect(loading).not.toBeInTheDocument();
      });
    });

    describe('add product to cart', () => {
      it('reduces available when add product to cart', async () => {
        const { product } = setUpSuccess();

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
        const { product } = setUpSuccessUnavailable();

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
    it('renders empty state if no product was bought', async () => {
      setUpSuccess();

      await waitFor(() => {
        const emptyState = screen.getByText(Texts.cart.empty.description());
        expect(emptyState).toBeInTheDocument();
      });
    });

    it('does not renders empty state if has products in cart', async () => {
      const { product } = setUpSuccess();

      await waitFor(() => {
        buyProduct(product);

        const emptyState = screen.queryByText(Texts.cart.empty.description());
        expect(emptyState).not.toBeInTheDocument();

        const productContainer = getProductInCartContainer(product.id);
        expect(productContainer).toBeInTheDocument();
      });
    });

    it('render product when it was bought', async () => {
      const { product } = setUpSuccess();

      await waitFor(() => {
        buyProduct(product);

        const productElement = getProductInCartContainer(product.id);
        expect(productElement).toBeInTheDocument();
      });
    });

    it('does not render product when it was not bought', async () => {
      const { product, product2: productToNotBeBought } = setUpSuccess();

      await waitFor(() => {
        buyProduct(product);

        const productToNotBeBoughtElement = queryProductInCartContainer(
          productToNotBeBought.id,
        );
        expect(productToNotBeBoughtElement).not.toBeInTheDocument();
      });
    });

    it('renders info from bought products', async () => {
      const { product: product1, product2 } = setUpSuccess();
      const boughtProducts = [product1, product2];
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
      const { product } = setUpSuccess();
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
      const { product2: productToBeBought } = setUpSuccessUnavailable();
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
      const { product } = setUpSuccess();

      await waitFor(() => {
        buyProduct(product);
        removeProductByCart(product);

        const productInCartElement = queryProductInCartContainer(product.id);
        expect(productInCartElement).not.toBeInTheDocument();
      });
    });
  });

  describe('financial', () => {
    it('renders total', async () => {
      const { product1, product2 } = setUpSuccess();

      await waitFor(() => {
        buyProduct(product1);
        buyProduct(product2);
      });

      await waitFor(() => {
        const shipping = Shipping.minWeightPrice;
        const total = getTotalElement(
          sum(product1.price, product2.price, shipping),
        );
        expect(total).toBeInTheDocument();
      });
    });

    it('renders subtotal', async () => {
      const { product1, product2 } = setUpSuccess();

      await waitFor(() => {
        buyProduct(product1);
        buyProduct(product2);
      });

      await waitFor(() => {
        const subtotal = getSubtotalElement(
          sum(product1.price, product2.price),
        );
        expect(subtotal).toBeInTheDocument();
      });
    });

    describe('shipping', () => {
      it('renders 0 if has no products in cart', async () => {
        setUpSuccess();

        await waitFor(() => {
          const subtotal = getShippingElement(0);
          expect(subtotal).toBeInTheDocument();
        });
      });

      it(`renders ${Shipping.minWeightPrice} if has no ${Shipping.minWeightLimit} or fewer products in cart`, async () => {
        const { product1, product2 } = setUpSuccess();

        await waitFor(() => {
          buyProduct(product1);
          buyProduct(product2);
        });

        await waitFor(() => {
          const subtotal = getShippingElement(Shipping.minWeightPrice);
          expect(subtotal).toBeInTheDocument();
        });
      });

      it(`renders ${Shipping.free} if it has enough products over ${Shipping.freeLimit}`, async () => {
        const { product1, product2, product3 } = setUpSuccess();

        await waitFor(() => {
          buyProductTimes(product1)(product1.available);
          buyProductTimes(product2)(product2.available);
          buyProductTimes(product3)(product3.available);
        });

        await waitFor(() => {
          const subtotal = getShippingElement(Shipping.free);
          expect(subtotal).toBeInTheDocument();
        });
      });
    });
  });

  describe('vouchers', () => {
    const getVoucherInput = () => screen.getByRole('textbox');

    const getApplyVoucherButton = () =>
      screen.getByRole('button', { name: Texts.cart.voucher.button() });

    const applyVoucher = (voucher: string) => {
      Events.typeOn(getVoucherInput())(voucher);
      Events.clickOn(getApplyVoucherButton());
    };

    const getDiscountElement = (discount: number) => {
      const container = screen.getByTestId('financial@discount');

      return getByText(container, formatMoney(discount));
    };

    it('disables voucher input and button after succeed', async () => {
      const { fixedVoucher: voucher, product } = setUpSuccess();

      await waitFor(() => {
        buyProduct(product);
        applyVoucher(voucher.code);
      });

      await waitFor(() => {
        expect(getVoucherInput()).toBeDisabled();
        expect(getApplyVoucherButton()).toBeDisabled();
      });
    });

    describe('percentage', () => {
      it('reduces total when voucher is applied', async () => {
        const { percentualVoucher, product } = setUpSuccess();

        await waitFor(() => {
          buyProduct(product);
          applyVoucher(percentualVoucher.code);
        });

        await waitFor(() => {
          const shipping = Shipping.minWeightPrice;
          const subtotal = product.price;
          const percentage = percentualVoucher.amount;

          const total = shipping + decrease(subtotal, percentage);
          const totalElement = getTotalElement(total);
          expect(totalElement).toBeInTheDocument();
        });
      });

      it('renders discount when voucher is applied', async () => {
        const { percentualVoucher, product } = setUpSuccess();

        await waitFor(() => {
          buyProduct(product);
          applyVoucher(percentualVoucher.code);
        });

        await waitFor(() => {
          const subtotal = product.price;
          const percentage = percentualVoucher.amount;

          const discountElement = getDiscountElement(
            discount(subtotal, percentage),
          );
          expect(discountElement).toBeInTheDocument();
        });
      });
    });

    describe('fixed', () => {
      it('reduces total when voucher is applied', async () => {
        const { fixedVoucher, product } = setUpSuccess();

        await waitFor(() => {
          buyProductTimes(product)(product.available);
          applyVoucher(fixedVoucher.code);
        });

        await waitFor(() => {
          const shipping = Shipping.minWeightPrice;
          const subtotal = product.price * product.available;
          const total = shipping + subtotal;
          const discount = fixedVoucher.amount;

          const totalElement = getTotalElement(sub(total, discount));
          expect(totalElement).toBeInTheDocument();
        });
      });

      it('renders discount when voucher is applied', async () => {
        const { fixedVoucher, product } = setUpSuccess();

        await waitFor(() => {
          buyProduct(product);
          applyVoucher(fixedVoucher.code);
        });

        await waitFor(() => {
          const discount = fixedVoucher.amount;

          const discountElement = getDiscountElement(discount);
          expect(discountElement).toBeInTheDocument();
        });
      });
    });

    describe('shipping', () => {
      it('does not reduce shipping if minValue is not satisfied', async () => {
        const { shippingVoucher, product } = setUpSuccess();

        await waitFor(() => {
          buyProduct(product);
          applyVoucher(shippingVoucher.code);
        });

        await waitFor(() => {
          const shipping = Shipping.minWeightPrice;

          const shippingElement = getShippingElement(shipping);
          expect(shippingElement).toBeInTheDocument();
        });
      });
    });
  });
});
