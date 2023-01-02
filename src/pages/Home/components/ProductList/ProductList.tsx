import React from 'react';
import { ProductCard } from '@/pages/Home/components';

import * as Styles from './ProductList.styles';
import { ProductListProps } from './ProductList.types';

export function ProductList({
  children: products,
  addProductToCart,
}: ProductListProps) {
  return (
    <Styles.Container>
      {products.map(product => (
        <ProductCard key={product.id} onClick={addProductToCart}>
          {product}
        </ProductCard>
      ))}
    </Styles.Container>
  );
}
