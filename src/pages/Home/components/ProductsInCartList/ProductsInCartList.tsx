import React from 'react';
import { EmptyState, ProductInCartCard } from '@/pages/Home/components';
import { isListEmpty } from '@/utils/list/isEmpty';

import * as Styles from '@/pages/Home/components/Cart/Cart.styles';
import { ProductsInCartListProps } from './ProductsInCartList.types';

export function ProductsInCartList({
  children: products,
  incrementProduct,
  decrementProduct,
}: ProductsInCartListProps) {
  const productsInCart = products.filter(product => product.isInCart);
  const isEmpty = isListEmpty(productsInCart);

  return (
    <Styles.Container>
      {isEmpty && <EmptyState />}

      {productsInCart.map(product => (
        <ProductInCartCard
          key={product.id}
          incrementProduct={incrementProduct}
          decrementProduct={decrementProduct}
        >
          {product}
        </ProductInCartCard>
      ))}
    </Styles.Container>
  );
}
