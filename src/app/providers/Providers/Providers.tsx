import React from 'react';
import { ReactQueryProvider } from '@/app/providers/ReactQuery';
import { ThemeProvider } from '@/app/providers/Theme';

export const Providers: React.FC = ({ children }) => {
  return (
    <ReactQueryProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </ReactQueryProvider>
  );
};
