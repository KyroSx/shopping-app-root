import { useVouchers } from '@/hooks/useVouchers/useVouchers';
import { renderReactQueryHook } from '@/utils/testing';
import { getVouchers } from '@/services/vouchers';

jest.mock('@/services/vouchers');

describe(useVouchers, () => {
  const renderUseVouchers = () => {
    const hook = renderReactQueryHook(useVouchers);

    return { hook };
  };

  it('calls getVoucher when isVoucherValid', () => {
    const { hook } = renderUseVouchers();

    hook.result.current.isVoucherValid();
    expect(getVouchers).toHaveBeenCalledTimes(1);
  });
});
