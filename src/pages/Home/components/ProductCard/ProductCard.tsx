import React from 'react';
import { Product } from '@/services/products';

import * as Styles from './ProductCard.styles';
import { Money } from '@/ui/components';

interface ProductCardProps {
  children: Product;
}

export function ProductCard({ children: product }: ProductCardProps) {
  return (
    <Styles.Card>
      <Styles.Content>
        <Styles.Name>{product.name}</Styles.Name>

        <Styles.Row>
          <Money>{product.price}</Money>

          <p>--</p>

          <Styles.Available>{product.available} left</Styles.Available>
        </Styles.Row>
      </Styles.Content>

      <Styles.BuyButton>Buy</Styles.BuyButton>
    </Styles.Card>
  );
}
