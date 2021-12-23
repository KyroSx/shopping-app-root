import { ProductInCart } from '@/ui/hooks/useCart';

const increment = (number: number) => number + 1;
const decrement = (number: number) => number - 1;

export function addProduct(product: ProductInCart): ProductInCart {
  return {
    ...product,
    isInCart: true,
    available: decrement(product.available),
    quantity: increment(product.quantity),
  };
}
