import React from 'react';
import { ProductsInCart, Voucher } from '@/types';
import { calculateSubtotal } from '@/lib/financial';
import { calculateShipping } from '@/lib/shipping';
import { sum } from '@/utils/math';
import { applyVoucher } from '@/lib/voucher';

export function useFinancial(
  products: ProductsInCart,
  voucher: Voucher | null,
) {
  const [total, setTotal] = React.useState(0);
  const [subtotal, setSubtotal] = React.useState(0);
  const [shipping, setShipping] = React.useState(0);
  const [disccount, setDiscount] = React.useState(0);

  const calculateTotalWithVoucher = () => {
    const final = applyVoucher(voucher!, subtotal, shipping);

    setShipping(final.shipping);
    setDiscount(final.discount);
    setTotal(final.total);
  };

  React.useEffect(() => {
    const subtotalCalculated = calculateSubtotal(products);
    const shippingCalculated = calculateShipping(products);

    setSubtotal(subtotalCalculated);
    setShipping(shippingCalculated);
    setTotal(sum(subtotalCalculated, shippingCalculated));

    if (voucher) calculateTotalWithVoucher();
  }, [calculateTotalWithVoucher, products, voucher]);

  return {
    total,
    subtotal,
    shipping,
  };
}
