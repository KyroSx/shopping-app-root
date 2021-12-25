import React from 'react';

import * as Styles from './Button.styles';

type HtmlButton = React.ButtonHTMLAttributes<HTMLButtonElement>;

export enum ButtonVariants {
  primary = 'primary',
  secondary = 'secondary',
}

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
