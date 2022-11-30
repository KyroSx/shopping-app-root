import { ProductInCart } from '@/types';

export interface ProductInCartCardProps {
  children: ProductInCart;
  incrementProduct: (product: ProductInCart) => void;
  decrementProduct: (product: ProductInCart) => void;
}
