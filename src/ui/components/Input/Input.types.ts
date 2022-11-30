import React from 'react';

type HtmlInput = React.InputHTMLAttributes<HTMLInputElement>;

export type Event = React.ChangeEvent<HTMLInputElement>;

export interface InputProps extends HtmlInput {
  onChangeValue?: (value: string) => void;
}
