import React from 'react';
import { Products } from '@/services/products';
import { ProductCard } from '@/pages/Home/components';

interface ProductListProps {
  children: Products;
}

export function ProductList({ children: products }: ProductListProps) {
  return (
    <>
      {products.map(product => (
        <div key={product.id} data-testid={product.id}>
          <ProductCard>{product}</ProductCard>

          <br />
        </div>
      ))}
    </>
  );
}
