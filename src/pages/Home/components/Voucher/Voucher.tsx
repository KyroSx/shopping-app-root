import React from 'react';
import { Button, Input } from '@/ui/components';
import { Texts } from '@/ui/craft/texts';

import * as Styles from './Voucher.styles';

export function Voucher() {
  return (
    <Styles.Container>
      <Input placeholder={Texts.cart.voucher.input()} />

      <Button>{Texts.cart.voucher.button()}</Button>
    </Styles.Container>
  );
}
