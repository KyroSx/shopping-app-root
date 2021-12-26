import { ProductInCart } from '@/ui/hooks/useCart';

export function isNotAvailable(product: ProductInCart) {
  return product.available === 0;
}
