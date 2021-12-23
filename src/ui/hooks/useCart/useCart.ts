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
  productsInCart: ProductsInCart;
  addProductToCart: (product: ProductInCart) => void;
};

export function useCart(products: Products = []): Output {
  const [productsInCart, setProductsInCart] = useState<ProductsInCart>(
    mapProductsToProductsInCart(products),
  );

  const addProductInCart = (product: ProductInCart) => {
    setProductsInCart(addProductToCart(productsInCart, product));
  };

  return {
    productsInCart,
    addProductToCart: addProductInCart,
  };
}
