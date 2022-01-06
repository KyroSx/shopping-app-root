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

  it('calls getVoucher when voucher is valid', async () => {
    const { hook } = renderUseVouchers();

    await hook.result.current.getVoucherByCode();
    expect(getVouchers).toHaveBeenCalledTimes(1);
  });

  it('returns null if when voucher is invalid', async () => {
    const { hook } = renderUseVouchers();

    const noVoucher = await hook.result.current.getVoucherByCode();
    expect(noVoucher).toBeNull();
  });

  it('returns voucher if is valid', async () => {
    const vouchers = makeVouchers();
    const [voucher] = vouchers;
    mockGetVouchersService(vouchers);
    const { hook } = renderUseVouchers();

    const voucherReturned = await hook.result.current.getVoucherByCode(
      voucher.code,
    );
    expect(voucherReturned).toEqual(voucher);
  });
});
