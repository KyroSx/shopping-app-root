import React from 'react';
import { ProductsInCart } from '@/types';
import { calculateSubtotal } from '@/lib/financial';
import { calculateShipping } from '@/lib/shipping';
import { sum } from '@/utils/math';

export function useFinancial(products: ProductsInCart) {
  const [total, setTotal] = React.useState(0);
  const [subtotal, setSubtotal] = React.useState(0);
  const [shipping, setShipping] = React.useState(0);

  React.useEffect(() => {
    const subtotalCalculated = calculateSubtotal(products);
    const shippingCalculated = calculateShipping(products);

    setSubtotal(subtotalCalculated);
    setShipping(shippingCalculated);
    setTotal(sum(subtotalCalculated, shippingCalculated));
  }, [products]);

  return {
    total,
    subtotal,
    shipping,
  };
}
