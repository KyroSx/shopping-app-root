import React from 'react';
import { Button, Input } from '@/ui/components';
import { Texts } from '@/ui/craft/texts';

import * as Styles from './Voucher.styles';
import { Voucher as VoucherType } from '@/types';
import { useVouchers } from '@/hooks/useVouchers';

interface VoucherProps {
  applyVoucher: (code: VoucherType) => void;
}

export function Voucher({ applyVoucher }: VoucherProps) {
  const { getVoucherByCode } = useVouchers();
  const [code, setCode] = React.useState('');

  const apply = async () => {
    const voucher = await getVoucherByCode(code);

    if (voucher) applyVoucher(voucher);
  };

  return (
    <Styles.Container>
      <Input
        placeholder={Texts.cart.voucher.input()}
        value={code}
        onChangeValue={setCode}
      />

      <Button onClick={apply}>{Texts.cart.voucher.button()}</Button>
    </Styles.Container>
  );
}
