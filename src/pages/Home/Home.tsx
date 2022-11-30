import React from 'react';
import { Texts } from '@/ui/craft/texts';
import { ProductList, Cart } from '@/pages/Home/components';
import { useCart, useProducts } from '@/hooks';

import * as Styles from './Home.styles';

export const Home: React.FC = () => {
  const { products: initialProducts } = useProducts();
  const { products, addProductToCart, removeProductFromCart } =
    useCart(initialProducts);

  return (
    <Styles.Container>
      <ProductList addProductToCart={addProductToCart}>{products}</ProductList>

      <Styles.CartContainer>
        <Cart
          incrementProduct={addProductToCart}
          decrementProduct={removeProductFromCart}
        >
          {products}
        </Cart>

        <Styles.CheckoutButton>
          {Texts.cart.checkout.button()}
        </Styles.CheckoutButton>
      </Styles.CartContainer>
    </Styles.Container>
  );
};
