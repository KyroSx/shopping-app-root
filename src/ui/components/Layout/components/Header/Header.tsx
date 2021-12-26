import React from 'react';
import { Texts } from '@/ui/craft/texts';
import { User } from '@/ui/components/Layout/components';

import * as Styles from './Header.styles';

export function Header() {
  return (
    <Styles.Header>
      <Styles.Title>{Texts.global.layout.header.text()}</Styles.Title>

      <User />
    </Styles.Header>
  );
}
