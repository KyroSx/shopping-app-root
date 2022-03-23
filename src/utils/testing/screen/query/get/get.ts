import * as RTL from '@testing-library/react';
import { Options, OptionsByText } from './get.types';

interface ByIdInput extends Options {
  testId: string;
}

export function byTestId({ container, testId, ...options }: ByIdInput) {
  if (container) return RTL.getByTestId(container, testId, options);

  return RTL.screen.getByTestId(testId, options);
}

interface ByText extends OptionsByText {
  text: string;
}

export function byText({ text, ...options }: ByText) {
  return RTL.screen.getByText(text, options);
}
