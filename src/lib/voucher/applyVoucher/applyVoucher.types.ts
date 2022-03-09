import { Voucher } from '@/types';

type ApplyVoucherMetadata = {
  total: number;
  shipping: number;
  discount: number;
};

export type ApplyVoucher = (
  voucher: Voucher,
  subtotal: number,
  shipping: number,
) => ApplyVoucherMetadata;

export type CalcFixed = (
  voucher: Voucher,
  total: number,
  shipping: number,
) => ApplyVoucherMetadata;

export type CalcPercentual = (
  voucher: Voucher,
  total: number,
  subtotal: number,
  shipping: number,
) => ApplyVoucherMetadata;

export type CalcShipping = (
  voucher: Voucher,
  total: number,
  subtotal: number,
  shipping: number,
) => ApplyVoucherMetadata;
