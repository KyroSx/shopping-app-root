import React from 'react';
import { ProductInCart } from '@/types';
import { Texts } from '@/ui/craft/texts';
import { calculateTotalPrice, isNotAvailable } from '@/lib/product';
import { ButtonVariants, Money, Text, Title } from '@/ui/components';

import * as Styles from './ProductInCartCard.styles';

interface ProductInCartCardProps {
  children: ProductInCart;
  incrementProduct: (product: ProductInCart) => void;
  decrementProduct: (product: ProductInCart) => void;
}

export function ProductInCartCard({
  children: product,
  incrementProduct,
  decrementProduct,
}: ProductInCartCardProps) {
  const incrementThisProduct = () => incrementProduct(product);
  const decrementThisProduct = () => decrementProduct(product);

  const thisProductIsNotAvailable = isNotAvailable(product);

  return (
    <Styles.Container data-testid={Texts.cart.product.testId(product.id)}>
      <Styles.Card>
        <Styles.Image />

        <Styles.Content>
          <Title>{product.name}</Title>

          <Styles.Row>
            <Text>{Texts.cart.product.quantity(product.quantity)}</Text>
            <Money>{calculateTotalPrice(product)}</Money>
          </Styles.Row>
        </Styles.Content>

        <Styles.ButtonContainer>
          <Styles.AddButton
            onClick={incrementThisProduct}
            variant={ButtonVariants.secondary}
            disabled={thisProductIsNotAvailable}
          >
            {Texts.cart.product.button.add()}
          </Styles.AddButton>

          <Styles.RemoveButton
            onClick={decrementThisProduct}
            variant={ButtonVariants.secondary}
          >
            {Texts.cart.product.button.remove()}
          </Styles.RemoveButton>
        </Styles.ButtonContainer>
      </Styles.Card>
    </Styles.Container>
  );
}
