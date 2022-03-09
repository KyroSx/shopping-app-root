import React from 'react';
import { ProductInCart, ProductsInCart, Voucher as VoucherType } from '@/types';
import { Title } from '@/ui/components';
import { Texts } from '@/ui/craft/texts';
import {
  Financial,
  ProductsInCartList,
  Voucher,
} from '@/pages/Home/components';

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
  const [voucher, setVoucher] = React.useState<VoucherType | null>(null);

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

      <Voucher applyVoucher={setVoucher} />

      <Financial products={products} voucher={voucher} />
    </Styles.Container>
  );
}
