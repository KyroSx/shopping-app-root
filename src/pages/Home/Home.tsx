import React from 'react';
import { useProducts } from '@/ui/hooks/useProducts';

export const Home: React.FC = () => {
  const { products } = useProducts();

  return (
    <div>
      {products.map(product => (
        <div key={product.id} data-testid={product.id}>
          <p>{product.name}</p>

          <p>price:{product.price}</p>

          <p>available:{product.available}</p>
        </div>
      ))}
    </div>
  );
};
