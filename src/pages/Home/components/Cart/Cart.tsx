import React from 'react';
import { ProductsInCart } from '@/ui/hooks/useCart';
import { Texts } from '@/ui/craft/texts';

interface CartProps {
  children: ProductsInCart;
}

export function Cart({ children: products }: CartProps) {
  return (
    <>
      {products.map(
        product =>
          product.isInCart && (
            <div
              key={product.id}
              data-testid={Texts.cart.product.testId(product.id)}
            >
              {product.name}
            </div>
          ),
      )}
    </>
  );
}
