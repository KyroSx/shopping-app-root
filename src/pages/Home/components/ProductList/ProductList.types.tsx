import { ProductInCart, ProductsInCart } from '@/types';

export interface ProductListProps {
  children: ProductsInCart;
  addProductToCart: (product: ProductInCart) => void;
}
