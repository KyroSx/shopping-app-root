/* eslint-disable @typescript-eslint/no-use-before-define */
import { ProductsInCart } from '@/types';
import { calculateSubtotal } from '@/lib/financial';
import { Shipping } from '@/constants';

type Math = (n: number) => number;
type Bool = (n: number) => boolean;

export function calculateShipping(products: ProductsInCart) {
  const weight = calculateWeight(products);
  const subtotal = calculateSubtotal(products);

  if (isEmpty(weight)) return 0;
  if (isAboveLimit(subtotal)) return Shipping.free;
  if (isBelowLimit(weight)) return Shipping.minWeightPrice;

  return calculateOverWeightLimit(weight);
}

const calculateWeight = (products: ProductsInCart) =>
  products.reduce((total, item) => total + item.quantity, 0);

const isAboveLimit: Bool = subtotal => subtotal > Shipping.freeLimit;
const isBelowLimit: Bool = weight => weight <= Shipping.minWeightLimit;
const isEmpty: Bool = weight => weight === 0;

const calculateOverWeightLimit: Math = weight => {
  if (isDivisibleByFive(weight)) return fx(weight);

  return fx(predDivisibleByFive(weight));
};

const isDivisibleByFive: Bool = num => num % 5 === 0;
const predDivisibleByFive: Math = num => num - (num % 5);
const fx: Math = x => {
  return (
    ((x - Shipping.minWeightLimit) / Shipping.weightLimit) *
      Shipping.pricePerWeightRate +
    Shipping.minWeightPrice
  );
};
