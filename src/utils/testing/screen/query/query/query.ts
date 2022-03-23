import * as RTL from '@testing-library/react';
import { ByTestId, ByText } from '@/utils/testing/screen/query/by.types';

export function byTestId({ container, testId, ...options }: ByTestId) {
  if (container) return RTL.queryByTestId(container, testId, options);

  return RTL.screen.queryByTestId(testId, options);
}

export function byText({ container, text, ...options }: ByText) {
  if (container) return RTL.queryByText(container, text, options);

  return RTL.screen.queryByText(text, options);
}
