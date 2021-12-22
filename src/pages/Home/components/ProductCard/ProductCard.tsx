import React from 'react';
import { Product } from '@/services/products';

interface ProductCardProps {
  children: Product;
}

export function ProductCard({ children: product }: ProductCardProps) {
  return (
    <div>
      <div>
        <p>{product.name}</p>

        <p>price:{product.price}</p>

        <p>available:{product.available}</p>
      </div>

      <br />
    </div>
  );
}
