import { ProductInCart, useCart } from '@/ui/hooks/useCart/useCart';
import { renderReactQueryHook } from '@/utils/testing';
import { Products } from '@/services/products';
import {
  makeProducts,
  makeProductsUnavailable,
} from '@/utils/testing/factories/products';

describe(useCart, () => {
  const renderUseCart = (products: Products = []) =>
    renderReactQueryHook(useCart, products);

  it('maps product to productInCart', () => {
    const hook = renderUseCart(makeProducts());

    hook.result.current.productsInCart.forEach(
      (productInCart: ProductInCart) => {
        expect(productInCart.isInCart).toBe(false);
        expect(productInCart.quantity).toBe(0);
      },
    );
  });

  it('adds product to cart', async () => {
    const hook = renderUseCart(makeProducts());

    hook.result.current.addProductToCart(hook.result.current.productsInCart[0]);

    const [productInCart] = hook.result.current.productsInCart;
    expect(productInCart.isInCart).toBe(true);
    expect(productInCart.quantity).toBe(1);
    expect(productInCart.available).toBe(9);
  });

  it('increments product quantity if in is in cart already', async () => {
    const hook = renderUseCart(makeProducts());

    hook.result.current.addProductToCart(hook.result.current.productsInCart[0]);
    hook.result.current.addProductToCart(hook.result.current.productsInCart[0]);

    const [productInCart] = hook.result.current.productsInCart;
    expect(productInCart.isInCart).toBe(true);
    expect(productInCart.quantity).toBe(2);
    expect(productInCart.available).toBe(8);
  });

  it('doest not add product in cart if it is unavailable', async () => {
    const hook = renderUseCart(makeProductsUnavailable());

    hook.result.current.addProductToCart(hook.result.current.productsInCart[0]);

    const [productInCart] = hook.result.current.productsInCart;
    expect(productInCart.isInCart).toBe(false);
    expect(productInCart.quantity).toBe(0);
    expect(productInCart.available).toBe(0);
  });
});
