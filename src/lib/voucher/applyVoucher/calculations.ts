import { Voucher } from '@/types';
import { CalcFixed, CalcPercentual, CalcShipping } from './applyVoucher.types';

const calculateDiscount = (total: number, percentage: number) => {
  return (total * percentage) / 100;
};

export const calcNoVoucher = (total: number, shipping: number) => {
  return {
    total,
    shipping,
    discount: 0,
  };
};

export const calcFixed: CalcFixed = (voucher, total, shipping) => {
  const discount = voucher.amount;

  return {
    total: total - discount,
    shipping,
    discount,
  };
};

export const calcPercentual: CalcPercentual = (
  voucher,
  total,
  subtotal,
  shipping,
) => {
  const discount = calculateDiscount(subtotal, voucher.amount);

  return {
    total: total - discount,
    discount,
    shipping,
  };
};

const isAboveMin = (voucher: Voucher, subtotal: number) => {
  if (voucher.minValue) return subtotal >= voucher.minValue;

  return false;
};

const calcShippingAboveMin = (total: number, shipping: number) => {
  return {
    total: total - shipping,
    shipping: 0,
    discount: shipping,
  };
};

export const calcShipping: CalcShipping = (
  voucher,
  total,
  subtotal,
  shipping,
) => {
  if (isAboveMin(voucher, subtotal))
    return calcShippingAboveMin(total, shipping);

  return calcNoVoucher(total, shipping);
};
