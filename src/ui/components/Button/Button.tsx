import React from 'react';
import { ButtonVariants } from '@/ui/components';

import * as Styles from './Button.styles';

type HtmlButton = React.ButtonHTMLAttributes<HTMLButtonElement>;

export interface ButtonProps extends HtmlButton {
  children: string;
  variant?: ButtonVariants;
}

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
