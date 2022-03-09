import React from 'react';
import { Button, Input } from '@/ui/components';
import { Texts } from '@/ui/craft/texts';

import * as Styles from './Voucher.styles';
import { Voucher as VoucherType } from '@/types';
import { useApplyVoucher } from '@/hooks/useApplyVoucher';

interface VoucherProps {
  applyVoucher: (voucher: VoucherType) => void;
}

export function Voucher({ applyVoucher }: VoucherProps) {
  const { apply, code, setCode, hasApplied } = useApplyVoucher(applyVoucher);

  return (
    <Styles.Container>
      <Input
        placeholder={Texts.cart.voucher.input()}
        value={code}
        onChangeValue={setCode}
        disabled={hasApplied}
      />

      <Button onClick={apply} disabled={hasApplied}>
        {Texts.cart.voucher.button()}
      </Button>
    </Styles.Container>
  );
}
