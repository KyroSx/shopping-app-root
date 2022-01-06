import { useQuery } from 'react-query';
import { getVouchers } from '@/services/vouchers';
import { Voucher } from '@/types';
import { getVoucherOrNull } from '@/lib/voucher';

export function useVouchers() {
  const query = useQuery('vouchers', getVouchers, { enabled: false });

  const getVoucherByCode = async (code?: string): Promise<Voucher | null> => {
    const vouchers = await query.refetch();

    return getVoucherOrNull(vouchers?.data, code);
  };

  return {
    getVoucherByCode,
  };
}
