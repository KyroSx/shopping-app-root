import React from 'react';
import { useProducts } from '@/ui/hooks/useProducts';
import { Texts } from '@/ui/craft/texts';

import * as Styles from './Home.styles';
import { ProductList } from '@/pages/Home/components';
import { useCart } from '@/ui/hooks/useCart';
import { Cart } from '@/pages/Home/components/Cart';

export const Home: React.FC = () => {
  const { status, products: initialProducts } = useProducts();
  const { products, addProductToCart } = useCart(initialProducts);

  if (status.isUnexpectedError)
    return <div>{Texts.global.error.unexpected()}</div>;

  return (
    <Styles.Container>
      <ProductList addProductToCart={addProductToCart}>{products}</ProductList>
      <Cart>{products}</Cart>
    </Styles.Container>
  );
};
