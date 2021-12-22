import { useQuery } from 'react-query';
import { getProducts } from '@/services/products';
import { UnexpectedError } from '@/errors/UnexpectedError';

export function useProducts() {
  const query = useQuery(['products'], getProducts, {
    retry: false,
  });

  return {
    products: query.data ?? [],
    status: {
      isLoading: query.isFetching,
      isUnexpectedError: UnexpectedError.is(query?.error),
    },
  };
}
