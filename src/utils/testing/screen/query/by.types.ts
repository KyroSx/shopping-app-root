import {
  Options,
  OptionsByLevel,
  OptionsByText,
  Roles,
} from '@/utils/testing/screen/query/options.types';

export interface ByTestId extends Options {
  testId: string;
}

export interface ByText extends OptionsByText {
  text: string;
}

export interface ByRole extends OptionsByLevel {
  role: Roles;
}
