import React from 'react';
import { GlobalStyle } from '@/ui/GlobalStyle';
import { ReactWrapper } from '@/app/wrappers';
import { Providers } from '@/app/providers';
import { Loading } from '@/ui/components/Loading';
import { Layout } from '@/ui/components/Layout/Layout';
import { ErrorBoundary } from '@/app/error';

export const App: React.FC = ({ children }) => {
  return (
    <ReactWrapper>
      <Providers>
        <ErrorBoundary>
          <Layout>
            <Loading />

            {children}
          </Layout>
        </ErrorBoundary>
      </Providers>

      <GlobalStyle />
    </ReactWrapper>
  );
};
