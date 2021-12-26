import React from 'react';
import { Texts } from '@/ui/craft/texts';

import * as Styles from './User.styles';

export function User() {
  return (
    <Styles.Container>
      <Styles.Image />

      <Styles.Text>{Texts.global.layout.header.user()}</Styles.Text>
    </Styles.Container>
  );
}
