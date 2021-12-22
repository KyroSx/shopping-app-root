import React from 'react';
import { LoadingFallback } from '@/app/wrappers/React/LoadingFallback';
import { StrictMode } from '@/app/wrappers/React/StrictMode';

export const ReactWrapper: React.FC = ({ children }) => {
  return (
    <StrictMode>
      <LoadingFallback>{children}</LoadingFallback>
    </StrictMode>
  );
};
