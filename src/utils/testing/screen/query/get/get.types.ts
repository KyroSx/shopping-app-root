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
