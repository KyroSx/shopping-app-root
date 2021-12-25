import React from 'react';
import { ProductInCart } from '@/ui/hooks/useCart';
import { Texts } from '@/ui/craft/texts';
import { formatMoney } from '@/utils/formatting';

interface ProductCardProps {
  children: ProductInCart;
}

export function ProductInCartCard({ children: product }: ProductCardProps) {
  return (
    <div data-testid={Texts.cart.product.testId(product.id)}>
      <p>{product.name}</p>
      <p>{product.quantity}</p>
      <p>{formatMoney(product.quantity * product.price)}</p>
    </div>
  );
}
