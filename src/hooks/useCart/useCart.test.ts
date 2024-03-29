import { useCart } from '@/hooks/useCart';
import { ProductInCart, Products } from '@/types';
import {
  makeProducts,
  makeProductsUnavailable,
} from '@/utils/testing/factories/products';
import { Screen } from '@/utils/testing/screen';

describe(useCart, () => {
  const renderUseCart = (products: Products = []) =>
    Screen.renderReactQueryHook(useCart, products);

  it('maps product to productInCart', () => {
    const hook = renderUseCart(makeProducts());

    hook.result.current.products.forEach((productInCart: ProductInCart) => {
      expect(productInCart.isInCart).toBe(false);
      expect(productInCart.quantity).toBe(0);
    });
  });

  describe('add product', () => {
    it('adds product to cart', async () => {
      const hook = renderUseCart(makeProducts());

      hook.result.current.addProductToCart(hook.result.current.products[0]);

      const [productInCart] = hook.result.current.products;
      expect(productInCart.isInCart).toBe(true);
      expect(productInCart.quantity).toBe(1);
      expect(productInCart.available).toBe(9);
    });

    it('increments product quantity if in is in cart already', async () => {
      const hook = renderUseCart(makeProducts());

      hook.result.current.addProductToCart(hook.result.current.products[0]);
      hook.result.current.addProductToCart(hook.result.current.products[0]);

      const [productInCart] = hook.result.current.products;
      expect(productInCart.isInCart).toBe(true);
      expect(productInCart.quantity).toBe(2);
      expect(productInCart.available).toBe(8);
    });

    it('doest not add product in cart if it is unavailable', async () => {
      const hook = renderUseCart(makeProductsUnavailable());

      hook.result.current.addProductToCart(hook.result.current.products[0]);

      const [productInCart] = hook.result.current.products;
      expect(productInCart.isInCart).toBe(false);
      expect(productInCart.quantity).toBe(0);
      expect(productInCart.available).toBe(0);
    });
  });

  describe('remove product', () => {
    it('removes product from cart', async () => {
      const hook = renderUseCart(makeProducts());

      hook.result.current.addProductToCart(hook.result.current.products[0]);
      hook.result.current.removeProductFromCart(
        hook.result.current.products[0],
      );

      const [productInCart] = hook.result.current.products;
      expect(productInCart.isInCart).toBe(false);
      expect(productInCart.quantity).toBe(0);
      expect(productInCart.available).toBe(10);
    });

    it('decrements product quantity if in is in cart already', async () => {
      const hook = renderUseCart(makeProducts());

      hook.result.current.addProductToCart(hook.result.current.products[0]);
      hook.result.current.addProductToCart(hook.result.current.products[0]);
      hook.result.current.removeProductFromCart(
        hook.result.current.products[0],
      );

      const [productInCart] = hook.result.current.products;
      expect(productInCart.isInCart).toBe(true);
      expect(productInCart.quantity).toBe(1);
      expect(productInCart.available).toBe(9);
    });

    it('doest not add remove from cart if it has no quantity', async () => {
      const hook = renderUseCart(makeProductsUnavailable());

      hook.result.current.removeProductFromCart(
        hook.result.current.products[0],
      );

      const [productInCart] = hook.result.current.products;
      expect(productInCart.isInCart).toBe(false);
      expect(productInCart.quantity).toBe(0);
      expect(productInCart.available).toBe(0);
    });
  });
});
