import React from 'react';
import { useVouchers } from '@/hooks/useVouchers';
import { Voucher } from '@/types';
import { useToasts } from '@/hooks/useToasts';
import { Texts } from '@/ui/craft/texts';

export function useApplyVoucher(applyVoucher: (voucher: Voucher) => void) {
  const { getVoucherByCode } = useVouchers();
  const { success, error } = useToasts();

  const [code, setCode] = React.useState('');
  const [hasApplied, setHasApplied] = React.useState(false);

  const apply = async () => {
    const voucher = await getVoucherByCode(code);

    if (voucher) {
      applyVoucher(voucher);
      setHasApplied(true);
      success(Texts.cart.voucher.toast.success());
    }

    if (!voucher) {
      error(Texts.cart.voucher.toast.error());
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
