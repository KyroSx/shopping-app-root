import { useQuery } from 'react-query';
import { getProducts } from '@/services/products';

export function useProducts() {
  const query = useQuery(['products'], getProducts);

  return {
    products: query.data ?? [],
  };
}
