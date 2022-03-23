import { screen } from '@testing-library/react';

interface ByIdInput {
  testId: string;
}

export function getByTestId(input: ByIdInput) {
  screen.getByTestId(input.testId);
}
