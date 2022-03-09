import React from 'react';
import { render } from '@testing-library/react';
import { App } from '@/app';

type Component<T> = React.FC<T>;
type Props<T> = T;

export function renderWithProviders<T = {}>(
  Component: Component<T>,
  props: Props<T> = {} as T,
) {
  return render(
    <App>
      <Component {...props} />
    </App>,
  );
}
