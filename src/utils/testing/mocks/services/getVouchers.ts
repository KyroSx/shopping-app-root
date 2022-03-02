import { Vouchers } from '@/types';
import { delay } from '@/utils/time';
import { getVouchers } from '@/services/vouchers';

export const mockGetVouchersService = (vouchers: Vouchers) => {
  return (getVouchers as jest.Mock).mockImplementationOnce(async () => {
    await delay(0.5);

    return vouchers;
  });
};
