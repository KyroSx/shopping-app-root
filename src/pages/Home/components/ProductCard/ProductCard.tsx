import React from 'react';
import { Product } from '@/services/products';

import * as Styles from './ProductCard.styles';

interface ProductCardProps {
  children: Product;
}

export function ProductCard({ children: product }: ProductCardProps) {
  return (
    <Styles.Card>
      <Styles.Content>
        <Styles.Name>{product.name}</Styles.Name>

        <Styles.Row>
          <Styles.Price>{product.price}</Styles.Price>

          <p>--</p>

          <Styles.Available>{product.available} left</Styles.Available>
        </Styles.Row>
      </Styles.Content>

      <br />
    </Styles.Card>
  );
}
