import React from 'react';
import { ProductInCart, ProductsInCart } from '@/types';
import { Button, Input, Title } from '@/ui/components';
import { Texts } from '@/ui/craft/texts';
import { Financial, ProductsInCartList } from '@/pages/Home/components';

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

      <Styles.Voucher>
        <Input placeholder={Texts.cart.voucher.input()} />

        <Button>{Texts.cart.voucher.button()}</Button>
      </Styles.Voucher>

      <Financial products={products} />
    </Styles.Container>
  );
}
