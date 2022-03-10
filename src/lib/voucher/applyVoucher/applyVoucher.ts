import {
  isFixed,
  isPercentual,
  isShipping,
} from '@/lib/voucher/applyVoucher/is';
import {
  calcFixed,
  calcNoVoucher,
  calcPercentual,
  calcShipping,
} from '@/lib/voucher/applyVoucher/calculations';
import { ApplyVoucher } from './applyVoucher.types';

export const calculateVoucherDiscount: ApplyVoucher = (
  voucher,
  subtotal,
  shipping,
) => {
  const total = subtotal + shipping;

  if (!voucher) return calcNoVoucher(total, shipping);

  if (isPercentual(voucher))
    return calcPercentual(voucher, total, subtotal, shipping);

  if (isFixed(voucher)) return calcFixed(voucher, total, shipping);

  if (isShipping(voucher))
    return calcShipping(voucher, total, subtotal, shipping);

  return calcNoVoucher(total, shipping);
};
