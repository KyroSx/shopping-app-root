import * as RTL from '@testing-library/react';
import { ByTestId } from '@/utils/testing/screen/query/by.types';

export function byTestId({ container, testId, ...options }: ByTestId) {
  if (container) return RTL.queryByTestId(container, testId, options);

  return RTL.screen.queryByTestId(testId, options);
}
