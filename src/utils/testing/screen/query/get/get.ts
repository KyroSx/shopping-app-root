import * as RTL from '@testing-library/react';
import {
  ByTestId,
  ByRole,
  ByText,
} from '@/utils/testing/screen/query/by.types';

export function byTestId({ container, testId, ...options }: ByTestId) {
  if (container) return RTL.getByTestId(container, testId, options);

  return RTL.screen.getByTestId(testId, options);
}

export function byText({ container, text, ...options }: ByText) {
  if (container) return RTL.getByText(container, text, options);

  return RTL.screen.getByText(text, options);
}

export function byRole({ container, role, ...options }: ByRole) {
  if (container) return RTL.getByRole(container, role, options);

  return RTL.screen.getByRole(role, options);
}
