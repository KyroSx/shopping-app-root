export enum VoucherType {
  percentual = 'percentual',
  fixed = 'fixed',
  shipping = 'shipping',
}

export type Voucher = {
  id: number;
  code: string;
  type: VoucherType;
  amount: number;
  minValue?: number;
};

export type Vouchers = Voucher[];
