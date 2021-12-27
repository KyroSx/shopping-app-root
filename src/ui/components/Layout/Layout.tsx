import React from 'react';
import { Header } from '@/ui/components/Layout/components/Header';

import * as Styles from './Layout.styles';

export const Layout: React.FC = ({ children: page }) => {
  return (
    <Styles.PageContainer>
      <Header />

      {page}
    </Styles.PageContainer>
  );
};
