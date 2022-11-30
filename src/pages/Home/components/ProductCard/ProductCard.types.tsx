import { ProductInCart } from '@/types';

export interface ProductCardProps {
  children: ProductInCart;
  onClick: (product: ProductInCart) => void;
}
