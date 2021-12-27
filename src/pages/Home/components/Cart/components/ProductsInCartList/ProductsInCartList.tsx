import React from 'react';
import { ProductInCart, ProductsInCart } from '@/types';
import {
  ProductInCartCard,
  EmptyState,
} from '@/pages/Home/components/Cart/components';
import { isListEmpty } from '@/utils/list/isEmpty';

import * as Styles from '@/pages/Home/components/Cart/Cart.styles';

interface CartProps {
  children: ProductsInCart;
  incrementProduct: (product: ProductInCart) => void;
  decrementProduct: (product: ProductInCart) => void;
}

export function ProductsInCartList({
  children: products,
  incrementProduct,
  decrementProduct,
}: CartProps) {
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
