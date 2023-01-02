import React from 'react';
import { Texts } from '@/ui/craft/texts';
import { LoadingSpinner } from '@/ui/components/Loading/LoadingSpinner';
import { useIsAppLoading } from '@/infra';

import * as Styles from './Loading.styles';

export function Loading() {
  const { isLoading } = useIsAppLoading();

  if (!isLoading) {
    return null;
  }

  return (
    <Styles.Container data-testid="loading">
      <LoadingSpinner />

      <Styles.Text>{Texts.global.loading.text()}</Styles.Text>
    </Styles.Container>
  );
}
