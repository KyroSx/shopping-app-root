import React from 'react';
import { ReactQueryProvider } from '@/app/providers/ReactQuery';
import { ThemeProvider } from '@/app/providers/Theme';
import { ToastProvider } from '@/app/providers/Toast';

export const Providers: React.FC = ({ children }) => {
  return (
    <ReactQueryProvider>
      <ThemeProvider>
        <ToastProvider>{children}</ToastProvider>
      </ThemeProvider>
    </ReactQueryProvider>
  );
};
