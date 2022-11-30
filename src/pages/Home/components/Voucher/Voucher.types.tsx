import { Voucher as VoucherType } from '@/types';

export interface VoucherProps {
  applyVoucher: (voucher: VoucherType) => void;
}
