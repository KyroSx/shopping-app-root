import React from 'react';
import { QueryClientProvider } from 'react-query';

import { QueryClientInstance } from './queryClient';
import { DevTools } from './DevTools';
import { Environment } from '@/config/environment';

export const QueryProvider: React.FC = ({ children }) => {
  return (
    <QueryClientProvider client={QueryClientInstance}>
      {children}

      {!Environment.isProduction() && <DevTools />}
    </QueryClientProvider>
  );
};
