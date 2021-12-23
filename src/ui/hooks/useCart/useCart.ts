import React, { useEffect } from 'react';
import { Product, Products } from '@/services/products';
import {
  addProductToCart,
  removeProductFromCart,
  mapProductsToProductsInCart,
} from '@/ui/hooks/useCart/functions';

export type ProductInCart = Product & {
  isInCart: boolean;
  quantity: number;
};

export type ProductsInCart = ProductInCart[];

export type AddProductToCart = (product: ProductInCart) => void;

type Output = {
  products: ProductsInCart;
  addProductToCart: AddProductToCart;
  removeProductFromCart: (product: ProductInCart) => void;
};

export function useCart(initialProducts: Products = []): Output {
  const [products, setProducts] = React.useState<ProductsInCart>([]);

  useEffect(() => {
    setProducts(mapProductsToProductsInCart(initialProducts));
  }, [initialProducts]);

  const addProductInCart = (product: ProductInCart) => {
    setProducts(addProductToCart(products, product));
  };

  const removeProductInCart = (product: ProductInCart) => {
    setProducts(removeProductFromCart(products, product));
  };

  return {
    products,
    addProductToCart: addProductInCart,
    removeProductFromCart: removeProductInCart,
  };
}
