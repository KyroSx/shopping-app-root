import React from 'react';
import { useProducts } from '@/ui/hooks/useProducts';
import { Texts } from '@/ui/craft/texts';

import * as Styles from './Home.styles';
import { ProductList } from '@/pages/Home/components';

export const Home: React.FC = () => {
  const { products, status } = useProducts();

  if (status.isLoading) return <div>{Texts.global.loading.text}</div>;

  if (status.isUnexpectedError)
    return <div>{Texts.global.error.unexpected}</div>;

  return (
    <Styles.Container>
      <ProductList>{products}</ProductList>
    </Styles.Container>
  );
};
