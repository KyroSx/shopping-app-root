import React from 'react';

import * as Styles from './ProductCard.styles';
import { Money } from '@/ui/components';
import { ProductInCart } from '@/ui/hooks/useCart';
import { Texts } from '@/ui/craft/texts';

interface ProductCardProps {
  children: ProductInCart;
  onClick: (product: ProductInCart) => void;
}

export function ProductCard({ children: product, onClick }: ProductCardProps) {
  const onClickThis = () => onClick(product);

  return (
    <Styles.Card>
      <Styles.Content>
        <Styles.Name>{product.name}</Styles.Name>

        <Styles.Row>
          <Money>{product.price}</Money>

          <p>--</p>

          <Styles.Available>
            {Texts.productCard.available(product.available)}
          </Styles.Available>
        </Styles.Row>
      </Styles.Content>

      <Styles.BuyButton onClick={onClickThis}>
        {Texts.productCard.button.text}
      </Styles.BuyButton>
    </Styles.Card>
  );
}
