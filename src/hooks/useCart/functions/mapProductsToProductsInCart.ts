import { Products, ProductsInCart } from '@/types';

export function mapProductsToProductsInCart(
  products: Products,
): ProductsInCart {
  return products.map(product => {
    return {
      ...product,
      isInCart: false,
      quantity: 0,
    };
  });
}
