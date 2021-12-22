import React from 'react';
import * as Styles from './Loading.styles';
import { Texts } from '@/ui/craft/texts';
import { LoadingSpinner } from '@/ui/components/Loading/LoadingSpinner';
import { useReactQueryIsFetching } from '@/ui/hooks/useReactQueryIsFetching';

export function Loading() {
  const { isLoading } = useReactQueryIsFetching();

  if (!isLoading) return null;

  return (
    <Styles.Container data-testid="loading">
      <LoadingSpinner />

      <Styles.Container>{Texts.global.loading.text}</Styles.Container>
    </Styles.Container>
  );
}
