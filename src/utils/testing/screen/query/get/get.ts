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

export function byText({ container, text, ...options }: ByText) {
  if (container) return RTL.getByText(container, text, options);

  return RTL.screen.getByText(text, options);
}

interface ByRole extends Options {
  role: string;
}

export function byRole({ role }: ByRole) {
  return RTL.screen.getByRole(role);
}
