import { ProductInCart } from '@/types';

export function isNotAvailable(product: ProductInCart) {
  return product.available === 0;
}

export function calculateSelfSubtotal(product: ProductInCart) {
  return product.quantity * product.price;
}
