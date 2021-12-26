import React from 'react';
import { useProducts } from '@/ui/hooks/useProducts';
import { Texts } from '@/ui/craft/texts';

import * as Styles from './Home.styles';
import { ProductList, Cart } from '@/pages/Home/components';
import { useCart } from '@/ui/hooks/useCart';
import { Text } from '@/ui/components';

export const Home: React.FC = () => {
  const { status, products: initialProducts } = useProducts();
  const { products, addProductToCart, removeProductFromCart } =
    useCart(initialProducts);

  if (status.isUnexpectedError)
    return <Text>{Texts.global.error.unexpected()}</Text>;

  return (
    <Styles.Container>
      <ProductList addProductToCart={addProductToCart}>{products}</ProductList>

      <Cart
        incrementProduct={addProductToCart}
        decrementProduct={removeProductFromCart}
      >
        {products}
      </Cart>
    </Styles.Container>
  );
};
