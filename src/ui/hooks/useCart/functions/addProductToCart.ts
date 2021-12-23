import { addProduct } from '@/ui/hooks/useCart/functions/addProduct';
import { ProductInCart, ProductsInCart } from '@/ui/hooks/useCart';

function addCorrectProductInCart(product: ProductInCart) {
  return (productInCart: ProductInCart) => {
    return productInCart.id === product.id
      ? addProduct(product)
      : productInCart;
  };
}

export function addProductToCart(
  productsInCart: ProductsInCart,
  product: ProductInCart,
) {
  return productsInCart.map(addCorrectProductInCart(product));
}
