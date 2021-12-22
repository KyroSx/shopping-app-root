import React from 'react';
import * as Styles from '@/ui/components/Loading/Loading.styles';

export function LoadingSpinner() {
  return (
    <Styles.StyledSpinner viewBox="0 0 50 50">
      <circle
        className="path"
        cx="25"
        cy="25"
        r="20"
        fill="none"
        strokeWidth="4"
      />
    </Styles.StyledSpinner>
  );
}
