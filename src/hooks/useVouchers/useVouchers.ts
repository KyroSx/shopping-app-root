import { useQuery } from 'react-query';
import { getVouchers } from '@/services/vouchers';

export function useVouchers() {
  const query = useQuery('vouchers', getVouchers, { enabled: false });

  const isVoucherValid = () => query.refetch();

  return {
    isVoucherValid,
  };
}
