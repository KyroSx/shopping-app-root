import React from 'react';
import { useProducts } from '@/ui/hooks/useProducts';
import { Texts } from '@/ui/craft/texts';

import * as Styles from './Home.styles';
import { ProductList } from '@/pages/Home/components';
import { useCart } from '@/ui/hooks/useCart';

export const Home: React.FC = () => {
  const { products, dispatchProducts, addProductToCart } = useCart();
  const { status } = useProducts(dispatchProducts);

  if (status.isUnexpectedError)
    return <div>{Texts.global.error.unexpected}</div>;

  return (
    <Styles.Container>
      <ProductList addProductToCart={addProductToCart}>{products}</ProductList>
    </Styles.Container>
  );
};
