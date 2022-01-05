import { ProductInCart } from '@/types';
import { multiply } from '@/utils/math';

export function isNotAvailable(product: ProductInCart) {
  return product.available === 0;
}

export function calculateTotalPrice(product: ProductInCart) {
  return multiply(product.quantity, product.price);
}
