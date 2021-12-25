import React from 'react';
import { ProductInCart, ProductsInCart } from '@/ui/hooks/useCart';
import { ProductInCartCard } from '@/pages/Home/components/Cart/components';

import * as Styles from './Cart.styles';

interface CartProps {
  children: ProductsInCart;
  incrementProduct: (product: ProductInCart) => void;
  decrementProduct: (product: ProductInCart) => void;
}

export function Cart({
  children: products,
  incrementProduct,
  decrementProduct,
}: CartProps) {
  return (
    <Styles.Container>
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
