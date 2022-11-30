import React from 'react';

import * as Styles from './Input.styles';
import { InputProps, Event } from './Input.types';

export function Input({ onChange, onChangeValue, ...htmlProps }: InputProps) {
  const dispatchChanges = (event: Event) => {
    if (onChange) onChange(event);
    if (onChangeValue) onChangeValue(event.target.value);
  };

  return <Styles.Input onChange={dispatchChanges} {...htmlProps} />;
}
