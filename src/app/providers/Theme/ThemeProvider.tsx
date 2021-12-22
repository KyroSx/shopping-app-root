import React from 'react';
import { ThemeProvider as StyledComponentsProvider } from 'styled-components';
import { theme } from '@/app/providers/Theme';

export const ThemeProvider: React.FC = ({ children }) => {
  return (
    <StyledComponentsProvider theme={theme}>
      {children}
    </StyledComponentsProvider>
  );
};
