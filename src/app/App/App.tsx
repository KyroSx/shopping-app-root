import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from '../../styles/global';
import { Routes } from '../../routes';

export const App: React.FC = () => (
  <>
    <GlobalStyle />
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </>
);
