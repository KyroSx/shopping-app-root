import React from 'react';
import { ProductCard } from '@/pages/Home/components';
import { ProductInCart, ProductsInCart } from '@/types';

import * as Styles from './ProductList.styles';

interface ProductListProps {
  children: ProductsInCart;
  addProductToCart: (product: ProductInCart) => void;
}

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
