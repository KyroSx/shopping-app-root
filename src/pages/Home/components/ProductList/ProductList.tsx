import React from 'react';
import { ProductCard } from '@/pages/Home/components';
import { AddProductToCart, ProductsInCart } from '@/ui/hooks/useCart';

interface ProductListProps {
  children: ProductsInCart;
  addProductToCart: AddProductToCart;
}

export function ProductList({
  children: products,
  addProductToCart,
}: ProductListProps) {
  return (
    <>
      {products.map(product => (
        <div key={product.id} data-testid={product.id}>
          <ProductCard onClick={addProductToCart}>{product}</ProductCard>

          <br />
        </div>
      ))}
    </>
  );
}
