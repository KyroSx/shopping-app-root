import { Voucher, Vouchers } from '@/types';

export function getVoucherOrNull(
  vouchers: Vouchers | undefined,
  code: string | undefined,
): Voucher | null {
  const voucherFound = vouchers?.find(voucher => voucher.code === code);

  return voucherFound || null;
}
