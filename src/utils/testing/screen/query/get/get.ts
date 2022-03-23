import * as RTL from '@testing-library/react';
import { Options } from './get.types';

interface ByIdInput extends Options {
  testId: string;
  container?: HTMLElement;
}

export function byTestId({ container, testId, ...options }: ByIdInput) {
  if (container) return RTL.getByTestId(container, testId, options);

  return RTL.screen.getByTestId(testId, options);
}
