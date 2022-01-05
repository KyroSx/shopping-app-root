/* eslint-disable @typescript-eslint/no-use-before-define */
import { ProductsInCart } from '@/types';
import { calculateSubtotal } from '@/lib/financial';

export const LIMIT_FOR_FREE_SHIPPING = 400;
export const FREE_SHIPPING_VALUE = 0;

export const LIMIT_FOR_MIN_WEIGHT_SHIPPING = 10;
export const MIN_WEIGHT_SHIPPING_VALUE = 30;

export const LIMIT_OF_WEIGHT = 5;
export const PRICE_PER_RATE_OF_WEIGHT = 7;

export function calculateShipping(products: ProductsInCart) {
  const weight = getTotalWeight(products);
  const subtotal = calculateSubtotal(products);

  if (isAboveLimit(subtotal)) return FREE_SHIPPING_VALUE;
  if (isBelowLimit(weight)) return MIN_WEIGHT_SHIPPING_VALUE;

  return FREE_SHIPPING_VALUE;
}

const getTotalWeight = (products: ProductsInCart) =>
  products.reduce((total, item) => total + item.quantity, 0);

const isAboveLimit = (subtotal: number) => subtotal > LIMIT_FOR_FREE_SHIPPING;
const isBelowLimit = (weight: number) =>
  weight <= LIMIT_FOR_MIN_WEIGHT_SHIPPING;
