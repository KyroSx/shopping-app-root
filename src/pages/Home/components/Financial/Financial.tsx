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
  const { total } = useFinancial(products);

  return (
    <Styles.Financial>
      <Styles.Total>
        <Text>{Texts.cart.financial.total.text()}</Text>

        <Money>{total}</Money>
      </Styles.Total>
    </Styles.Financial>
  );
}
