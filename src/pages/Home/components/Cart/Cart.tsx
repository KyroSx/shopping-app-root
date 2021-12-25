import React from 'react';
import { ProductsInCart } from '@/ui/hooks/useCart';
import { ProductInCartCard } from '@/pages/Home/components/Cart/components';

import * as Styles from './Cart.styles';

interface CartProps {
  children: ProductsInCart;
}

export function Cart({ children: products }: CartProps) {
  return (
    <Styles.Container>
      {products.map(
        product =>
          product.isInCart && (
            <ProductInCartCard key={product.id}>{product}</ProductInCartCard>
          ),
      )}
    </Styles.Container>
  );
}
