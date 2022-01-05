import React from 'react';
import { ProductsInCart } from '@/types';
import { Money, Text } from '@/ui/components';
import { Texts } from '@/ui/craft/texts';
import { useFinancial } from '@/hooks/useFinancial';

import * as Styles from './Financial.styles';

interface FinancialProps {
  products: ProductsInCart;
}

export function Financial({ products }: FinancialProps) {
  const { total, subtotal, shipping } = useFinancial(products);

  return (
    <Styles.Container>
      <Styles.Line />

      <Styles.FinancialInfo data-testid="financial@subtotal">
        <Text>{Texts.cart.financial.subtotal.text()}</Text>

        <Money>{subtotal}</Money>
      </Styles.FinancialInfo>

      <Styles.Line />

      <Styles.FinancialInfo data-testid="financial@shipping">
        <Text>{Texts.cart.financial.shipping.text()}</Text>

        <Money>{shipping}</Money>
      </Styles.FinancialInfo>

      <Styles.Line />

      <Styles.Total data-testid="financial@total">
        <Text>{Texts.cart.financial.total.text()}</Text>

        <Money>{total}</Money>
      </Styles.Total>
    </Styles.Container>
  );
}
