import React from 'react';
import { ThemeProvider } from '@/app/providers/Theme';
import { QueryProvider } from '@/infra';

export const Providers: React.FC = ({ children }) => {
  return (
    <QueryProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </QueryProvider>
  );
};
