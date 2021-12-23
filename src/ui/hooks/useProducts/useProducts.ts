import { useQuery } from 'react-query';
import { getProducts } from '@/services/products';
import { UnexpectedError } from '@/errors/UnexpectedError';

export function useProducts(listener: Function) {
  const query = useQuery(['products'], getProducts, {
    retry: false,
    onSuccess: products => listener(products),
  });

  return {
    products: query.data ?? [],
    status: {
      isUnexpectedError: UnexpectedError.is(query?.error),
    },
  };
}
