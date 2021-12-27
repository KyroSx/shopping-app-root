import React from 'react';
import { ProductsInCart } from '@/types';

export function useFinancial(products: ProductsInCart) {
  const [total, setTotal] = React.useState(0);

  React.useEffect(() => {
    setTotal(
      products.reduce(
        (totalAcc, product) => totalAcc + product.price * product.quantity,
        0,
      ),
    );
  }, [products]);

  return {
    total,
  };
}
