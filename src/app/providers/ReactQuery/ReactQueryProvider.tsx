import React from 'react';
import { QueryClientProvider } from 'react-query';
import { QueryClientInstance } from '@/app/providers/ReactQuery';
import { DevTools } from '@/app/providers/ReactQuery/DevTools';

export const ReactQueryProvider: React.FC = ({ children }) => {
  return (
    <QueryClientProvider client={QueryClientInstance}>
      {children}
      <DevTools />
    </QueryClientProvider>
  );
};
