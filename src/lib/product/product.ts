import { ProductInCart } from '@/types';

export function isNotAvailable(product: ProductInCart) {
  return product.available === 0;
}

export function calculateTotalPrice(product: ProductInCart) {
  return product.quantity * product.price;
}
