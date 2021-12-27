import { ProductsInCart, ProductInCart } from '@/types';
import { calculateSelfSubtotal } from '@/lib/product';

const toSubtotal = (total: number, product: ProductInCart) =>
  total + calculateSelfSubtotal(product);

export function calculateSubtotal(products: ProductsInCart) {
  return products.reduce(toSubtotal, 0);
}
