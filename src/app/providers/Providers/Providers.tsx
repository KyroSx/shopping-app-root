import React from 'react';
import { ReactQueryProvider } from '@/app/providers/ReactQuery';

export const Providers: React.FC = ({ children }) => {
  return <ReactQueryProvider>{children}</ReactQueryProvider>;
};
