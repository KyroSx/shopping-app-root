import * as RTH from '@testing-library/react-hooks';
import { render } from '@testing-library/react';
import React from 'react';
import { ReactQueryProvider } from '@/app/providers/ReactQuery';
import { Providers } from '@/app/providers';

// Hooks
type Hook<T> = (input?: T) => any;
type Wrapper<T> = RTH.WrapperComponent<T>;

export function renderHook<T = undefined>(
  hook: Hook<T>,
  input?: T,
  wrapper?: Wrapper<T>,
) {
  return RTH.renderHook(() => hook(input), { wrapper });
}

export function renderReactQueryHook<T = undefined>(hook: Hook<T>, input?: T) {
  return renderHook(hook, input, ReactQueryProvider);
}

// Components
type Component<T> = React.FC<T>;
type Props<T> = T;

export function renderWithProviders<T = {}>(
  Component: Component<T>,
  props: Props<T>,
) {
  return render(
    <Providers>
      <Component {...props} />
    </Providers>,
  );
}
