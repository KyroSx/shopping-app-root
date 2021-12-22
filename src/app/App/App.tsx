import React from 'react';
import { Router } from '@/app/routes/Router';
import { GlobalStyle } from '@/ui/GlobalStyle';
import { ReactWrapper } from '@/app/wrappers';
import { Providers } from '@/app/providers';

export const App: React.FC = () => {
  return (
    <ReactWrapper>
      <Providers>
        <Router />
      </Providers>

      <GlobalStyle />
    </ReactWrapper>
  );
};
