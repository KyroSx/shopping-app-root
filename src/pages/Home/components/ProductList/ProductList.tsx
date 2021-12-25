import React from 'react';
import { ProductCard } from '@/pages/Home/components';
import { AddProductToCart, ProductsInCart } from '@/ui/hooks/useCart';

import * as Styles from './ProductList.styles';

interface ProductListProps {
  children: ProductsInCart;
  addProductToCart: AddProductToCart;
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
