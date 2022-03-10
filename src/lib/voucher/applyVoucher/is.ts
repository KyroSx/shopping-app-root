import { Voucher, VoucherType } from '@/types/voucher.d';

const isVoucher = (voucher: Voucher, type: VoucherType) =>
  voucher.type === type;
const checkVoucher = (type: VoucherType) => (voucher: Voucher) =>
  isVoucher(voucher, type);

export const isPercentual = checkVoucher(VoucherType.percentual);
export const isFixed = checkVoucher(VoucherType.fixed);
export const isShipping = checkVoucher(VoucherType.shipping);
