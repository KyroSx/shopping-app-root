import { Vouchers, VoucherType } from '@/types';

export function makeVouchers(): Vouchers {
  return [
    { id: 1, code: '#30OFF', type: VoucherType.percentual, amount: 30.0 },
    { id: 2, code: '#100DOLLARS', type: VoucherType.fixed, amount: 100.0 },
    {
      id: 3,
      code: '#SHIPIT',
      type: VoucherType.shipping,
      amount: 0,
      minValue: 300.5,
    },
  ];
}
