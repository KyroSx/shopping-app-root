import { ProductsInCart } from '@/ui/hooks/useCart';

interface CartProps {
  children: ProductsInCart;
}

export function Cart({ children: products }: CartProps) {
  return products;
}
