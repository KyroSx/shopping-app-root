import { ProductInCart, ProductsInCart } from '@/ui/hooks/useCart';

type UpdateFunction = (product: ProductInCart) => ProductInCart;

export const updateCorrectProduct = (updateFunction: UpdateFunction) => {
  return (productsInCart: ProductsInCart, product: ProductInCart) => {
    return productsInCart.map(productInCart => {
      return productInCart.id === product.id
        ? updateFunction(product)
        : productInCart;
    });
  };
};
