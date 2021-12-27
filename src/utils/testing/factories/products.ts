import { ProductInCart, Products, ProductsInCart } from '@/types';

export function makeProductInCart(
  product: Partial<ProductInCart>,
): ProductInCart {
  return {
    id: 1,
    name: 'Banana',
    price: 10.0,
    available: 10,
    quantity: 1,
    isInCart: true,
    ...product,
  };
}

export function makeProductOutOfCart(
  product: Partial<ProductInCart>,
): ProductInCart {
  return makeProductInCart({
    quantity: 0,
    isInCart: false,
    ...product,
  });
}

export function makeProducts(): Products {
  return [
    { id: 1, name: 'Banana', price: 10.0, available: 10 },
    { id: 2, name: 'Apple', price: 20.0, available: 15 },
    { id: 3, name: 'Orange', price: 30.0, available: 8 },
    { id: 4, name: 'Mango', price: 15.0, available: 20 },
  ];
}

export function makeProductsUnavailable(): Products {
  return [
    { id: 1, name: 'Banana', price: 10.0, available: 0 },
    { id: 2, name: 'Apple', price: 20.0, available: 1 },
    { id: 3, name: 'Orange', price: 30.0, available: 2 },
    { id: 4, name: 'Mango', price: 15.0, available: 3 },
  ];
}

export function makeProductsInCart(): ProductsInCart {
  return [
    {
      id: 1,
      name: 'Banana',
      price: 10.0,
      available: 10,
      quantity: 3,
      isInCart: true,
    },
    {
      id: 2,
      name: 'Apple',
      price: 20.0,
      available: 15,
      quantity: 2,
      isInCart: true,
    },
    {
      id: 3,
      name: 'Orange',
      price: 30.0,
      available: 8,
      quantity: 1,
      isInCart: true,
    },
    {
      id: 4,
      name: 'Mango',
      price: 15.0,
      available: 20,
      quantity: 0,
      isInCart: false,
    },
  ];
}
