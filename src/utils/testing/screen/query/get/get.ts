import * as RTL from '@testing-library/react';

interface ByIdInput {
  testId: string;
  container?: HTMLElement;
}

export function getByTestId({ container, testId }: ByIdInput) {
  if (container) return RTL.getByTestId(container, testId);

  return RTL.screen.getByTestId(testId);
}
