import React from 'react';
import { Router } from '@/app/routes/Router';
import { GlobalStyle } from '@/ui/GlobalStyle';
import { ReactWrapper } from '@/app/wrappers';

export const App: React.FC = () => {
  return (
    <ReactWrapper>
      <Router />
      <GlobalStyle />
    </ReactWrapper>
  );
};
