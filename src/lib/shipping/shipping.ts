/* eslint-disable @typescript-eslint/no-use-before-define */
import { ProductsInCart } from '@/types';
import { calculateSubtotal } from '@/lib/financial';

type Math = (n: number) => number;
type Bool = (n: number) => boolean;

export const LIMIT_FOR_FREE_SHIPPING = 400;
export const FREE_SHIPPING_VALUE = 0;

export const LIMIT_FOR_MIN_WEIGHT_SHIPPING = 10;
export const MIN_WEIGHT_SHIPPING_VALUE = 30;

export const LIMIT_OF_WEIGHT = 5;
export const VALUE_PER_RATE_OF_WEIGHT = 7;

export function calculateShipping(products: ProductsInCart) {
  const weight = calculateWeight(products);
  const subtotal = calculateSubtotal(products);

  if (isAboveLimit(subtotal)) return FREE_SHIPPING_VALUE;
  if (isBelowLimit(weight)) return MIN_WEIGHT_SHIPPING_VALUE;

  return calculateOverWeightLimit(weight);
}

const calculateWeight = (products: ProductsInCart) =>
  products.reduce((total, item) => total + item.quantity, 0);

const isAboveLimit: Bool = subtotal => subtotal > LIMIT_FOR_FREE_SHIPPING;
const isBelowLimit: Bool = weight => weight <= LIMIT_FOR_MIN_WEIGHT_SHIPPING;

const calculateOverWeightLimit: Math = weight => {
  if (isDivisibleByFive(weight)) return fx(weight);

  return fx(predDivisibleByFive(weight));
};

const isDivisibleByFive: Bool = num => num % 5 === 0;
const predDivisibleByFive: Math = num => num - (num % 5);
const fx: Math = x => {
  return (
    ((x - LIMIT_FOR_MIN_WEIGHT_SHIPPING) / LIMIT_OF_WEIGHT) *
      VALUE_PER_RATE_OF_WEIGHT +
    MIN_WEIGHT_SHIPPING_VALUE
  );
};
