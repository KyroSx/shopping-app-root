import React from 'react';
import { ProductsInCart, Voucher } from '@/types';
import { calculateSubtotal } from '@/lib/financial';
import { calculateShipping } from '@/lib/shipping';
import { sum } from '@/utils/math';
import { calculateVoucherDiscount } from '@/lib/voucher';

export function useFinancial(
  products: ProductsInCart,
  voucher: Voucher | null,
) {
  const [total, setTotal] = React.useState(0);
  const [subtotal, setSubtotal] = React.useState(0);
  const [shipping, setShipping] = React.useState(0);
  const [discount, setDiscount] = React.useState(0);

  const calculateTotalWithVoucher = React.useCallback(() => {
    const final = calculateVoucherDiscount(voucher!, subtotal, shipping);

    setShipping(final.shipping);
    setDiscount(final.discount);
    setTotal(final.total);
  }, [shipping, subtotal, voucher]);

  const calculateTotal = React.useCallback(() => {
    const subtotalCalculated = calculateSubtotal(products);
    const shippingCalculated = calculateShipping(products);

    setSubtotal(subtotalCalculated);
    setShipping(shippingCalculated);
    setTotal(sum(subtotalCalculated, shippingCalculated));
  }, [products]);

  React.useEffect(() => {
    if (voucher) return calculateTotalWithVoucher();

    return calculateTotal();
  }, [calculateTotal, calculateTotalWithVoucher, voucher]);

  return {
    total,
    discount,
    subtotal,
    shipping,
  };
}
