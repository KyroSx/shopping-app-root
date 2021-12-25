import React from 'react';
import { ProductCard } from '@/pages/Home/components';
import { AddProductToCart, ProductsInCart } from '@/ui/hooks/useCart';

import * as Styles from './ProductList.styles';
import { Texts } from '@/ui/craft/texts';

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
        <div
          key={product.id}
          data-testid={Texts.productCard.testId(product.id)}
        >
          <ProductCard onClick={addProductToCart}>{product}</ProductCard>
        </div>
      ))}
    </Styles.Container>
  );
}
