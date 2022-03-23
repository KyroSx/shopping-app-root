import { NormalizerFn } from '@testing-library/react';

export interface Options {
  exact?: boolean;
  container?: HTMLElement;
}

export interface OptionsByText extends Options {
  selector?: string;
  ignore?: string | boolean;
  normalizer?: NormalizerFn;
}

export interface OptionsByLevel extends Options {
  hidden?: boolean;
  name?: string;
  normalizer?: NormalizerFn;
  selected?: boolean;
  checked?: boolean;
  pressed?: boolean;
  current?: boolean | string;
  expanded?: boolean;
  queryFallbacks?: boolean;
  level?: number;
}
