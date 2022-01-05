import React from 'react';
import {
  addProductToCart,
  removeProductFromCart,
  mapProductsToProductsInCart,
} from '@/hooks/useCart/functions';
import { ProductInCart, Products, ProductsInCart } from '@/types';

export type AddProductToCart = (product: ProductInCart) => void;

type Output = {
  products: ProductsInCart;
  addProductToCart: AddProductToCart;
  removeProductFromCart: (product: ProductInCart) => void;
};

export function useCart(initialProducts: Products = []): Output {
  const [products, setProducts] = React.useState<ProductsInCart>([]);

  React.useEffect(() => {
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
