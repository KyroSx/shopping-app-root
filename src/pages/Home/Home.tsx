import React from 'react';
import { useProducts } from '@/ui/hooks/useProducts';
import { Texts } from '@/ui/craft/texts';

export const Home: React.FC = () => {
  const { products, hasUnexpectedErrorHappened } = useProducts();

  if (hasUnexpectedErrorHappened)
    return <div>{Texts.global.error.unexpected}</div>;

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
