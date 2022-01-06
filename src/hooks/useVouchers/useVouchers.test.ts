import { useVouchers } from '@/hooks/useVouchers/useVouchers';
import { renderReactQueryHook } from '@/utils/testing';
import { getVouchers } from '@/services/vouchers';

jest.mock('@/services/vouchers');

describe(useVouchers, () => {
  const renderUseVouchers = () => {
    const hook = renderReactQueryHook(useVouchers);

    return { hook };
  };

  it('calls getVoucher when voucher is valid', async () => {
    const { hook } = renderUseVouchers();

    await hook.result.current.isVoucherValid();
    expect(getVouchers).toHaveBeenCalledTimes(1);
  });

  it('returns null if when voucher is invalid', async () => {
    const { hook } = renderUseVouchers();

    const noVoucher = await hook.result.current.isVoucherValid();
    expect(noVoucher).toBeNull();
  });
});
