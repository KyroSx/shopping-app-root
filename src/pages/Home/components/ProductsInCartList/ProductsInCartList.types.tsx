import { ProductInCart, ProductsInCart } from '@/types';

export interface ProductsInCartListProps {
  children: ProductsInCart;
  incrementProduct: (product: ProductInCart) => void;
  decrementProduct: (product: ProductInCart) => void;
}
