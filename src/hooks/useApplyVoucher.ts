import React from 'react';
import { useVouchers } from '@/hooks';
import { Voucher } from '@/types';

export function useApplyVoucher(applyVoucher: (voucher: Voucher) => void) {
  const { getVoucherByCode } = useVouchers();
  const [code, setCode] = React.useState('');
  const [hasApplied, setHasApplied] = React.useState(false);

  const apply = async () => {
    const voucher = await getVoucherByCode(code);

    if (voucher) {
      applyVoucher(voucher);
      setHasApplied(true);
    }
  };

  const isEmpty = code === '';

  return {
    isEmpty,
    code,
    setCode,
    hasApplied,
    apply,
  };
}
