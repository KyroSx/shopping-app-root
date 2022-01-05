import { calculateShipping } from '@/lib/shipping/shipping';
import { makeProductInCart } from '@/utils/testing/factories/products';
import { ProductsInCart } from '@/types';
import { Shipping } from '@/constants';

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
  it('is 0 if cart is empty', () => {
    const shipping = calculateShipping(
      makeProductsInCartForShipping({ quantity: 0, price: 41 }),
    );
    expect(shipping).toBe(0);
  });

  it(`is ${Shipping.free} of total price is over ${Shipping.freeLimit}`, () => {
    const shipping = calculateShipping(
      makeProductsInCartForShipping({ quantity: 10, price: 41 }),
    );
    expect(shipping).toBe(Shipping.freeLimit);
  });

  it(`is ${Shipping.minWeightPrice} if total weight is below or equal ${Shipping.minWeightLimit}`, () => {
    const shipping = calculateShipping(
      makeProductsInCartForShipping({
        quantity: Shipping.minWeightLimit,
        price: 1,
      }),
    );
    expect(shipping).toBe(Shipping.minWeightPrice);
  });

  it(`is +${Shipping.pricePerWeightRate} for each ${Shipping.weightLimit}kg above ${Shipping.minWeightLimit}kg`, () => {
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
