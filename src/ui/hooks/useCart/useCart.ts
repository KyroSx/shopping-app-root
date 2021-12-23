import { useState } from 'react';
import { Product, Products } from '@/services/products';
import {
  addProductToCart,
  mapProductsToProductsInCart,
} from '@/ui/hooks/useCart/functions';

export type ProductInCart = Product & {
  isInCart: boolean;
  quantity: number;
};

export type ProductsInCart = ProductInCart[];

type Output = {
  products: ProductsInCart;
  addProductToCart: (product: ProductInCart) => void;
};

export function useCart(initialProducts: Products = []): Output {
  const [products, setProducts] = useState<ProductsInCart>(
    mapProductsToProductsInCart(initialProducts),
  );

  const addProductInCart = (product: ProductInCart) => {
    setProducts(addProductToCart(products, product));
  };

  return {
    products,
    addProductToCart: addProductInCart,
  };
}
