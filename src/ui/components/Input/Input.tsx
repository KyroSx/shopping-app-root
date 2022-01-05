import React from 'react';

import * as Styles from './Input.styles';

type HtmlInput = React.InputHTMLAttributes<HTMLInputElement>;

export function Input(htmlProps: HtmlInput) {
  return <Styles.Input {...htmlProps} />;
}
