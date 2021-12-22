import React from 'react';
import { GlobalStyle } from '@/ui/GlobalStyle';
import { ReactWrapper } from '@/app/wrappers';
import { Providers } from '@/app/providers';
import { Loading } from '@/ui/components/Loading';

export const App: React.FC = ({ children }) => {
  return (
    <ReactWrapper>
      <Providers>
        <Loading />

        {children}
      </Providers>

      <GlobalStyle />
    </ReactWrapper>
  );
};
