import React from 'react';
import { ProductInCart } from '@/ui/hooks/useCart';
import { Texts } from '@/ui/craft/texts';

interface ProductCardProps {
  children: ProductInCart;
}

export function ProductInCartCard({ children: product }: ProductCardProps) {
  return (
    <div data-testid={Texts.cart.product.testId(product.id)}>
      {product.name}
    </div>
  );
}
