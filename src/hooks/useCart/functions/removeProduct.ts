import { decrement, increment } from '@/utils/math';
import { ProductInCart } from '@/types';

const hasQuantity = (product: ProductInCart) => product.quantity !== 0;
const hasNoQuantity = (product: ProductInCart) => !hasQuantity(product);

const updateAvailableAndQuantity = (product: ProductInCart): ProductInCart => ({
  ...product,
  available: increment(product.available),
  quantity: decrement(product.quantity),
});

const updateIsInCart = (product: ProductInCart): ProductInCart => ({
  ...product,
  isInCart: hasQuantity(product),
});

export function removeProduct(product: ProductInCart): ProductInCart {
  if (hasNoQuantity(product)) return product;

  return updateIsInCart(updateAvailableAndQuantity(product));
}
