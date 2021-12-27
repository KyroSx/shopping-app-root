import { ProductInCart } from '@/types';

export function isNotAvailable(product: ProductInCart) {
  return product.available === 0;
}
