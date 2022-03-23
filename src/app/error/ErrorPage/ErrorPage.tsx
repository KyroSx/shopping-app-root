import React from 'react';

import { Texts } from '@/ui/craft/texts';
import { Text } from '@/ui/components';

export const ErrorPage: React.FC = () => {
  return (
    <div data-testid="error-page">
      <Text>{Texts.global.error.unexpected()}</Text>
    </div>
  );
};
