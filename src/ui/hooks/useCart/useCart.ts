import { useState } from 'react';
import { Product, Products } from '@/services/products';
import { mapProductsToProductsInCart } from '@/ui/hooks/useCart/functions';

export type ProductInCart = Product & {
  isInCart: boolean;
  quantity: number;
};

export type ProductsInCart = ProductInCart[];

type Output = {
  productsInCart: ProductsInCart;
  incrementProductQuantity: (product: ProductInCart) => void;
};

export function useCart(products: Products = []): Output {
  const [productsInCart, setProductsInCart] = useState<ProductsInCart>(
    mapProductsToProductsInCart(products),
  );

  const addProduct = (product: ProductInCart): ProductInCart => {
    return {
      ...product,
      isInCart: true,
      available: product.available - 1,
      quantity: 1,
    };
  };

  const incrementProductQuantity = (product: ProductInCart) => {
    setProductsInCart(
      productsInCart.map(productInCart => {
        return productInCart.id === product.id
          ? addProduct(product)
          : productInCart;
      }),
    );
  };

  return {
    productsInCart,
    incrementProductQuantity,
  };
}
