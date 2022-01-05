import {
  calculateShipping,
  FREE_SHIPPING_VALUE,
  LIMIT_FOR_FREE_SHIPPING,
  LIMIT_FOR_MIN_WEIGHT_SHIPPING,
  MIN_WEIGHT_SHIPPING_VALUE,
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
});
