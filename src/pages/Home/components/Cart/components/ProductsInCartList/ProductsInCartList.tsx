import React from 'react';
import { ProductInCart, ProductsInCart } from '@/ui/hooks/useCart';
import {
  ProductInCartCard,
  EmptyState,
} from '@/pages/Home/components/Cart/components';

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
  const isEmpty = productsInCart.length <= 0;

  return (
    <Styles.Container>
      {isEmpty && <EmptyState />}

      {products.map(
        product =>
          product.isInCart && (
            <ProductInCartCard
              key={product.id}
              incrementProduct={incrementProduct}
              decrementProduct={decrementProduct}
            >
              {product}
            </ProductInCartCard>
          ),
      )}
    </Styles.Container>
  );
}
