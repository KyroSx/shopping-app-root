import { ProductsInCart, ProductInCart } from '@/types';
import { calculateSelfSubtotal } from '@/lib/product';

const toSubtotal = (subtotal: number, product: ProductInCart) =>
  subtotal + calculateSelfSubtotal(product);

export function calculateSubtotal(products: ProductsInCart) {
  return products.reduce(toSubtotal, 0);
}
