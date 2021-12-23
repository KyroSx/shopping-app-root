import { Product, Products } from '@/services/products';

export type ProductInCart = Product & {
  isInCart: boolean;
  quantity: number;
};

export type ProductsInCart = ProductInCart[];

type Output = {
  productsInCart: ProductsInCart;
};

export function useCart(products: Products = []): Output {
  const productsInCart: ProductsInCart = products?.map(product => {
    return {
      ...product,
      isInCart: false,
      quantity: 0,
    };
  });

  return {
    productsInCart,
  };
}
