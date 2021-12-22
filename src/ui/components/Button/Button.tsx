import React from 'react';

import * as Styles from './Button.styles';

type HtmlButton = React.ButtonHTMLAttributes<HTMLButtonElement>;

export interface ButtonProps extends HtmlButton {
  children: string;
}

export function Button({ children, ...htmlProps }: ButtonProps) {
  return (
    <Styles.Button type="button" {...htmlProps}>
      {children}
    </Styles.Button>
  );
}
