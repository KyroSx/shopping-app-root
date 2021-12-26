import React from 'react';
import { ProductInCart } from '@/ui/hooks/useCart';
import { Texts } from '@/ui/craft/texts';
import { formatMoney } from '@/utils/formatting';

import * as Styles from './ProductInCartCard.styles';
import { isNotAvailable } from '@/lib/product';
import { ButtonVariants } from '@/ui/components';

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
  );
}
