import React from 'react';
import { useIsFetching } from 'react-query';
import * as Styles from './Loading.styles';
import { Texts } from '@/ui/craft/texts';
import { LoadingSpinner } from '@/ui/components/Loading/LoadingSpinner';

export function Loading() {
  const isLoading = useIsFetching();

  if (!isLoading) return null;

  return (
    <Styles.Container>
      <LoadingSpinner />

      <Styles.Container>{Texts.global.loading.text}</Styles.Container>
    </Styles.Container>
  );
}
