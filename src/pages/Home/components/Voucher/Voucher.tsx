import React from 'react';
import { Button, Input } from '@/ui/components';
import { Texts } from '@/ui/craft/texts';

import * as Styles from './Voucher.styles';
import { useApplyVoucher } from '@/hooks/';
import { VoucherProps } from './Voucher.types';

export function Voucher({ applyVoucher }: VoucherProps) {
  const { apply, code, isEmpty, setCode, hasApplied } =
    useApplyVoucher(applyVoucher);

  return (
    <Styles.Container>
      <Input
        placeholder={Texts.cart.voucher.input()}
        value={code}
        onChangeValue={setCode}
        disabled={hasApplied}
      />

      <Button onClick={apply} disabled={isEmpty || hasApplied}>
        {Texts.cart.voucher.button()}
      </Button>
    </Styles.Container>
  );
}
