import { useVouchers } from '@/hooks/useVouchers/useVouchers';
import { renderReactQueryHook } from '@/utils/testing';
import { getVouchers } from '@/services/vouchers';
import { mockGetVouchersService } from '@/utils/testing/mocks/services/getVouchers';
import { makeVouchers } from '@/utils/testing/factories/vouchers';

jest.mock('@/services/vouchers');

describe(useVouchers, () => {
  const renderUseVouchers = () => {
    const hook = renderReactQueryHook(useVouchers);

    return { hook };
  };

  const setUpSuccess = () => {
    const { hook } = renderUseVouchers();

    const vouchers = makeVouchers();
    const [voucher] = vouchers;
    mockGetVouchersService(vouchers);

    return {
      hook,

      vouchers,
      voucher,
    };
  };

  it('calls getVoucher when voucher is valid', async () => {
    const { hook } = setUpSuccess();

    await hook.result.current.getVoucherByCode();
    expect(getVouchers).toHaveBeenCalledTimes(1);
  });

  it('returns null if when voucher is invalid', async () => {
    const { hook } = setUpSuccess();

    const noVoucher = await hook.result.current.getVoucherByCode();
    expect(noVoucher).toBeNull();
  });

  it('returns voucher if is valid', async () => {
    const { hook, voucher } = setUpSuccess();

    const voucherReturned = await hook.result.current.getVoucherByCode(
      voucher.code,
    );
    expect(voucherReturned).toEqual(voucher);
  });
});
