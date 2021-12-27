import React from 'react';
import { SyncLoader } from 'react-spinners';
import { theme } from '@/app/providers/Theme';

import * as Styles from './Loading.styles';

export function LoadingSpinner() {
  return (
    <Styles.PositionCenter>
      <SyncLoader color={theme.colors.primary.brand} loading />
    </Styles.PositionCenter>
  );
}
