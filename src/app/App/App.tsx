import React from 'react';
import { GlobalStyle } from '@/ui/GlobalStyle';
import { ReactWrapper } from '@/app/wrappers';
import { Providers } from '@/app/providers';
import { Loading } from '@/ui/components/Loading';
import { Layout } from '@/ui/components/Layout/Layout';

export const App: React.FC = ({ children }) => {
  return (
    <ReactWrapper>
      <Providers>
        <Layout>
          <Loading />

          {children}
        </Layout>
      </Providers>

      <GlobalStyle />
    </ReactWrapper>
  );
};
