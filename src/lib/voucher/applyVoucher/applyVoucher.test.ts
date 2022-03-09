import { applyVoucher } from '@/lib/voucher';
import { Voucher, VoucherType } from '@/types';

type vouchers = {
  [key: string]: Voucher;
};

const vouchers: vouchers = {
  percentual: {
    id: 1,
    code: '#30OFF',
    type: VoucherType.percentual,
    amount: 30.0,
  },
  fixed: {
    id: 2,
    code: '#100DOLLARS',
    type: VoucherType.fixed,
    amount: 100.0,
  },
  shipping: {
    id: 3,
    code: '#SHIPIT',
    type: VoucherType.shipping,
    amount: 0,
    minValue: 40,
  },
  none: undefined as any as Voucher,
};

describe('Voucher', () => {
  it('should ignore no voucher', () => {
    expect(applyVoucher(vouchers.none, 100, 30)).toEqual({
      total: 130,
      shipping: 30,
      discount: 0,
    });
  });

  it('should apply percentual voucher', () => {
    expect(applyVoucher(vouchers.percentual, 100, 30)).toEqual({
      total: 100,
      shipping: 30,
      discount: 30,
    });
  });

  it('should apply fixed voucher', () => {
    expect(applyVoucher(vouchers.fixed, 100, 30)).toEqual({
      total: 30,
      shipping: 30,
      discount: 100,
    });
  });

  it('should apply shipping voucher', () => {
    expect(applyVoucher(vouchers.shipping, 100, 30)).toEqual({
      total: 100,
      shipping: 0,
      discount: 30,
    });
  });

  it('should apply shipping voucher if it is above min', () => {
    expect(applyVoucher(vouchers.shipping, 20, 10)).toEqual({
      total: 30,
      shipping: 10,
      discount: 0,
    });
  });
});
