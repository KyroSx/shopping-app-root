import { ProductInCart, ProductsInCart } from '@/types';

type AddProductToCart = (product: ProductInCart) => void;

export type Output = {
  products: ProductsInCart;
  addProductToCart: AddProductToCart;
  removeProductFromCart: (product: ProductInCart) => void;
};
