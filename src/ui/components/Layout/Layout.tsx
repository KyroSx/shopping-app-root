import React from 'react';

import { Title } from '@/ui/components';
import { Texts } from '@/ui/craft/texts';
import * as Styles from './Layout.styles';

export const Layout: React.FC = ({ children: page }) => {
  return (
    <Styles.PageContainer>
      <Title>{Texts.global.layout.header.text()}</Title>

      {page}
    </Styles.PageContainer>
  );
};
