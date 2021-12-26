import React from 'react';
import { ProductInCart, ProductsInCart } from '@/ui/hooks/useCart';

import * as Styles from './Cart.styles';
import { ProductsInCartList } from '@/pages/Home/components/Cart/components';

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
      <ProductsInCartList
        incrementProduct={incrementProduct}
        decrementProduct={decrementProduct}
      >
        {products}
      </ProductsInCartList>
    </Styles.Container>
  );
}
