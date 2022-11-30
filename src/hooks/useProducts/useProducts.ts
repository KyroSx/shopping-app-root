import React from 'react';

import { getProducts } from '@/services/products';
import { UnexpectedError } from '@/errors/UnexpectedError';
import { Products } from '@/types';
import { useQueryHandler } from '@/infra';

export function useProducts() {
  const [products, setProducts] = React.useState<Products>([]);

  const query = useQueryHandler({
    key: ['products'],
    function: getProducts,
    onSettled: queryProducts => setProducts(queryProducts ?? []),
  });

  return {
    products,
    status: {
      isUnexpectedError: UnexpectedError.is(query?.error),
    },
  };
}
