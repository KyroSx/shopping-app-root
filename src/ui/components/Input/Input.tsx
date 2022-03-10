import React from 'react';

import * as Styles from './Input.styles';

type HtmlInput = React.InputHTMLAttributes<HTMLInputElement>;
type Event = React.ChangeEvent<HTMLInputElement>;

interface InputProps extends HtmlInput {
  onChangeValue?: (value: string) => void;
}

export function Input({ onChange, onChangeValue, ...htmlProps }: InputProps) {
  const dispatchChanges = (event: Event) => {
    if (onChange) onChange(event);
    if (onChangeValue) onChangeValue(event.target.value);
  };

  return <Styles.Input onChange={dispatchChanges} {...htmlProps} />;
}
