import React from 'react';
import { useProducts } from '@/hooks/useProducts';
import { Texts } from '@/ui/craft/texts';
import { ProductList, Cart } from '@/pages/Home/components';
import { useCart } from '@/hooks/useCart';
import { Text } from '@/ui/components';

import * as Styles from './Home.styles';

export const Home: React.FC = () => {
  const { status, products: initialProducts } = useProducts();
  const { products, addProductToCart, removeProductFromCart } =
    useCart(initialProducts);

  if (status.isUnexpectedError)
    return <Text>{Texts.global.error.unexpected()}</Text>;

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
