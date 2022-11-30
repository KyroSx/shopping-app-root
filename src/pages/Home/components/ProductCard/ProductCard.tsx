import React from 'react';
import { Dot, Money, Text, Title } from '@/ui/components';
import { Texts } from '@/ui/craft/texts';
import { isNotAvailable } from '@/lib/product';

import * as Styles from './ProductCard.styles';
import { ProductCardProps } from './ProductCard.types';

export function ProductCard({ children: product, onClick }: ProductCardProps) {
  const onClickThis = () => onClick(product);

  const isProductNotAvailable = isNotAvailable(product);

  return (
    <Styles.Container data-testid={Texts.productCard.testId(product.id)}>
      <Styles.Card reduceOpacity={isProductNotAvailable}>
        <Styles.Image />

        <Styles.Content>
          <Title>{product.name}</Title>

          <Styles.Row>
            <Money>{product.price}</Money>

            <Dot />

            <Text>{Texts.productCard.available(product.available)}</Text>
          </Styles.Row>
        </Styles.Content>

        <Styles.BuyButton
          onClick={onClickThis}
          disabled={isProductNotAvailable}
        >
          {Texts.productCard.button.text()}
        </Styles.BuyButton>
      </Styles.Card>
    </Styles.Container>
  );
}
