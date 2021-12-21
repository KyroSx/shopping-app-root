import { useQuery } from 'react-query';
import { getProducts } from '@/services/products';

export function useProducts() {
  useQuery(['products'], getProducts);
}
