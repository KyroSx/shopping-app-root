import React from 'react';
import { Products } from '@/services/products';

interface ProductListProps {
  children: Products;
}

export function ProductList({ children: products }: ProductListProps) {
  return (
    <>
      {products.map(product => (
        <div key={product.id} data-testid={product.id}>
          <p>{product.name}</p>

          <p>price:{product.price}</p>

          <p>available:{product.available}</p>
        </div>
      ))}
    </>
  );
}
