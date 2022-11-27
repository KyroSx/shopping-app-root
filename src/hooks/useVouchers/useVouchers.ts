import { getVouchers } from '@/services/vouchers';
import { Voucher } from '@/types';
import { getVoucherOrNull } from '@/lib/voucher';
import { useQueryHandler } from '@/infra';

export function useVouchers() {
  const query = useQueryHandler({
    key: ['vouchers'],
    function: getVouchers,
    enabled: false,
  });

  const getVoucherByCode = async (code?: string): Promise<Voucher | null> => {
    const vouchers = await query.refetch();

    return getVoucherOrNull(vouchers?.data, code);
  };

  return {
    getVoucherByCode,
  };
}
