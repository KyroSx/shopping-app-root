import React from 'react';
import { ProductsInCart } from '@/ui/hooks/useCart';
import { ProductInCartCard } from '@/pages/Home/components/Cart/components';

interface CartProps {
  children: ProductsInCart;
}

export function Cart({ children: products }: CartProps) {
  return (
    <>
      {products.map(
        product =>
          product.isInCart && (
            <ProductInCartCard key={product.id}>{product}</ProductInCartCard>
          ),
      )}
    </>
  );
}
