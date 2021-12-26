import React from 'react';
import { Texts } from '@/ui/craft/texts';
import { Text } from '@/ui/components';

import * as Styles from './EmptyState.styles';

export function EmptyState() {
  return (
    <Styles.Container>
      <Text>{Texts.cart.empty.description()}</Text>
    </Styles.Container>
  );
}
