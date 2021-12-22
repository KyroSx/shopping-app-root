import React from 'react';

type HtmlButton = React.ButtonHTMLAttributes<HTMLButtonElement>;

export interface ButtonProps extends HtmlButton {
  children: string;
}

export function Button({ children, ...htmlProps }: ButtonProps) {
  return (
    <button type="button" {...htmlProps}>
      {children}
    </button>
  );
}
