import React from 'react';
import { ProductInCart } from '@/ui/hooks/useCart';
import { Texts } from '@/ui/craft/texts';
import { formatMoney } from '@/utils/formatting';

import * as Styles from './ProductInCartCard.styles';
import { ButtonVariants } from '@/ui/components';

interface ProductInCartCardProps {
  children: ProductInCart;
  incrementProduct: (product: ProductInCart) => void;
}

export function ProductInCartCard({
  children: product,
  incrementProduct,
}: ProductInCartCardProps) {
  const incrementThisProduct = () => incrementProduct(product);

  return (
    <Styles.Card data-testid={Texts.cart.product.testId(product.id)}>
      <Styles.Image />

      <Styles.Content>
        <Styles.Name>{product.name}</Styles.Name>

        <Styles.Row>
          <p>{Texts.cart.product.quantity(product.quantity)}</p>
          <p>{formatMoney(product.quantity * product.price)}</p>
        </Styles.Row>
      </Styles.Content>

      <Styles.ButtonContainer>
        <Styles.AddButton
          onClick={incrementThisProduct}
          variant={ButtonVariants.secondary}
        >
          {Texts.cart.product.button.add()}
        </Styles.AddButton>

        <Styles.RemoveButton variant={ButtonVariants.secondary}>
          -
        </Styles.RemoveButton>
      </Styles.ButtonContainer>
    </Styles.Card>
  );
}
