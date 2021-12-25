import React from 'react';
import { ProductInCart } from '@/ui/hooks/useCart';
import { Texts } from '@/ui/craft/texts';
import { formatMoney } from '@/utils/formatting';

import * as Styles from './ProductInCartCard.styles';

interface ProductCardProps {
  children: ProductInCart;
}

export function ProductInCartCard({ children: product }: ProductCardProps) {
  return (
    <Styles.Card data-testid={Texts.cart.product.testId(product.id)}>
      <Styles.Name>{product.name}</Styles.Name>

      <Styles.Row>
        <p>{Texts.cart.product.quantity(product.quantity)}</p>
        <p>{formatMoney(product.quantity * product.price)}</p>
      </Styles.Row>
    </Styles.Card>
  );
}
