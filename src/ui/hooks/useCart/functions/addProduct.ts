import { ProductInCart } from '@/ui/hooks/useCart';
import { decrement, increment } from '@/utils/math';

const isNotAvailable = (product: ProductInCart) => product.available === 0;

export function addProduct(product: ProductInCart): ProductInCart {
  if (isNotAvailable(product)) return product;

  return {
    ...product,
    isInCart: true,
    available: decrement(product.available),
    quantity: increment(product.quantity),
  };
}
