import React from 'react';
import { ButtonVariants } from '@/ui/components';

import * as Styles from './Button.styles';
import { ButtonProps } from './Button.types';

export function Button({
  children,
  variant = ButtonVariants.primary,
  ...htmlProps
}: ButtonProps) {
  return (
    <Styles.Button type="button" variant={variant} {...htmlProps}>
      {children}
    </Styles.Button>
  );
}
