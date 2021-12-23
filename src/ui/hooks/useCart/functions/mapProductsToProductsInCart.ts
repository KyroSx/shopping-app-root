import { Products } from '@/services/products';
import { ProductsInCart } from '@/ui/hooks/useCart';

export function mapProductsToProductsInCart(
  products: Products,
): ProductsInCart {
  return products.map(product => {
    return {
      ...product,
      isInCart: false,
      quantity: 0,
    };
  });
}
