import { ProductsInCart, ProductInCart } from '@/types';
import { calculateTotalPrice } from '@/lib/product';

const toSubtotal = (subtotal: number, product: ProductInCart) =>
  subtotal + calculateTotalPrice(product);

export function calculateSubtotal(products: ProductsInCart) {
  return products.reduce(toSubtotal, 0);
}
