import {
  calculateShipping,
  FREE_SHIPPING_VALUE,
  LIMIT_FOR_FREE_SHIPPING,
  LIMIT_FOR_MIN_WEIGHT_SHIPPING,
  LIMIT_OF_WEIGHT,
  MIN_WEIGHT_SHIPPING_VALUE,
  VALUE_PER_RATE_OF_WEIGHT,
} from '@/lib/shipping/shipping';
import { makeProductInCart } from '@/utils/testing/factories/products';
import { ProductsInCart } from '@/types';

type Params = {
  quantity?: number;
  price?: number;
};

const makeProductsInCartForShipping = ({
  quantity = 0,
  price = 42.0,
}: Params): ProductsInCart => {
  return [makeProductInCart({ quantity, price })];
};

describe(calculateShipping, () => {
  it(`is ${FREE_SHIPPING_VALUE} of total price is over ${LIMIT_FOR_FREE_SHIPPING}`, () => {
    const shipping = calculateShipping(
      makeProductsInCartForShipping({ quantity: 10, price: 41 }),
    );
    expect(shipping).toBe(FREE_SHIPPING_VALUE);
  });

  it(`is ${MIN_WEIGHT_SHIPPING_VALUE} if total weight is below or equal ${LIMIT_FOR_MIN_WEIGHT_SHIPPING}`, () => {
    const shipping = calculateShipping(
      makeProductsInCartForShipping({
        quantity: LIMIT_FOR_MIN_WEIGHT_SHIPPING,
        price: 1,
      }),
    );
    expect(shipping).toBe(MIN_WEIGHT_SHIPPING_VALUE);
  });

  it(`is +${VALUE_PER_RATE_OF_WEIGHT} for each ${LIMIT_OF_WEIGHT}kg above ${LIMIT_FOR_MIN_WEIGHT_SHIPPING}kg`, () => {
    let shipping = calculateShipping(
      makeProductsInCartForShipping({
        quantity: 14,
        price: 1,
      }),
    );
    expect(shipping).toBe(30);

    shipping = calculateShipping(
      makeProductsInCartForShipping({
        quantity: 15,
        price: 1,
      }),
    );
    expect(shipping).toBe(37);

    shipping = calculateShipping(
      makeProductsInCartForShipping({
        quantity: 16,
        price: 1,
      }),
    );
    expect(shipping).toBe(37);

    shipping = calculateShipping(
      makeProductsInCartForShipping({
        quantity: 25,
        price: 1,
      }),
    );
    expect(shipping).toBe(51);
  });
});
