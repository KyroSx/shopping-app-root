import React from 'react';
import { ProductsInCart } from '@/types';
import { calculateSubtotal } from '@/lib/financial';

export function useFinancial(products: ProductsInCart) {
  const [total, setTotal] = React.useState(0);
  const [subtotal, setSubtotal] = React.useState(0);
  const [shipping, setShipping] = React.useState(0);

  React.useEffect(() => {
    const subtotalCalculated = calculateSubtotal(products);

    setSubtotal(subtotalCalculated);
    setShipping(0);
    setTotal(subtotalCalculated);
  }, [products]);

  return {
    total,
    subtotal,
    shipping,
  };
}
