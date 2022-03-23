import * as RTL from '@testing-library/react';
import { Options, OptionsByLevel, OptionsByText } from './get.types';

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

interface ByRole extends OptionsByLevel {
  role: string;
}

export function byRole({ container, role, ...options }: ByRole) {
  if (container) return RTL.getByRole(container, role);

  return RTL.screen.getByRole(role, options);
}
