import React from 'react';
import { Router } from '@/app/routes/Router';
import { GlobalStyle } from '@/ui/GlobalStyle';

export const App: React.FC = () => (
  <>
    <GlobalStyle />
    <Router />
  </>
);
