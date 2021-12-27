import React from 'react';
import { ProductInCart, ProductsInCart } from '@/types';
import { Title } from '@/ui/components';
import { Texts } from '@/ui/craft/texts';
import { ProductsInCartList } from '@/pages/Home/components/Cart/components';

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
      <Styles.Header>
        <Title>{Texts.cart.title()}</Title>
      </Styles.Header>

      <Styles.List>
        <ProductsInCartList
          incrementProduct={incrementProduct}
          decrementProduct={decrementProduct}
        >
          {products}
        </ProductsInCartList>
      </Styles.List>
    </Styles.Container>
  );
}
