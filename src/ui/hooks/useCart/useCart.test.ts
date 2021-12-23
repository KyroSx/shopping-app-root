import { ProductInCart, useCart } from '@/ui/hooks/useCart/useCart';
import { renderReactQueryHook } from '@/utils/testing';
import { Products } from '@/services/products';
import { makeProducts } from '@/utils/testing/factories/products';

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
});
