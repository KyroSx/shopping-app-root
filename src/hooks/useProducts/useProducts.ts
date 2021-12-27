import { useQuery } from 'react-query';
import React from 'react';
import { getProducts } from '@/services/products';
import { UnexpectedError } from '@/errors/UnexpectedError';
import { Products } from '@/types';

export function useProducts() {
  const [products, setProducts] = React.useState<Products>([]);

  const query = useQuery(['products'], getProducts, {
    onSettled: queryProducts => setProducts(queryProducts ?? []),
  });

  return {
    products,
    status: {
      isUnexpectedError: UnexpectedError.is(query?.error),
    },
  };
}
