import React from 'react';
import { GlobalStyle } from '../../styles/global';
import { Router } from '../routes/Router';

export const App: React.FC = () => (
  <>
    <GlobalStyle />
    <Router />
  </>
);
