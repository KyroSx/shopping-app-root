import React from 'react';
import { Money, Text } from '@/ui/components';
import { Texts } from '@/ui/craft/texts';
import { useFinancial } from '@/hooks';

import * as Styles from './Financial.styles';
import { FinancialProps } from './Financial.types';

export function Financial({ products, voucher }: FinancialProps) {
  const { total, discount, subtotal, shipping } = useFinancial(
    products,
    voucher,
  );

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

      <Styles.FinancialInfo data-testid="financial@discount">
        <Text>{Texts.cart.financial.discount.text()}</Text>

        <Money>{discount}</Money>
      </Styles.FinancialInfo>

      <Styles.Line />

      <Styles.Total data-testid="financial@total">
        <Text>{Texts.cart.financial.total.text()}</Text>

        <Money>{total}</Money>
      </Styles.Total>
    </Styles.Container>
  );
}
