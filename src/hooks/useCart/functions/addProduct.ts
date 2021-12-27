import { ProductInCart } from '@/types';
import { decrement, increment } from '@/utils/math';
import { isNotAvailable } from '@/lib/product';

export function addProduct(product: ProductInCart): ProductInCart {
  if (isNotAvailable(product)) return product;

  return {
    ...product,
    isInCart: true,
    available: decrement(product.available),
    quantity: increment(product.quantity),
  };
}
