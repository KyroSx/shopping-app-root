import { ProductsInCart, ProductInCart } from '@/types';
import { calculateTotalPrice } from '@/lib/product';
import { sum } from '@/utils/math';

const toSubtotal = (subtotal: number, product: ProductInCart) =>
  sum(subtotal, calculateTotalPrice(product));

export function calculateSubtotal(products: ProductsInCart) {
  return products.reduce(toSubtotal, 0);
}
