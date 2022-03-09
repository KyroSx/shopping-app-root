import * as RTH from '@testing-library/react-hooks';
import { ReactQueryProvider } from '@/app/providers/ReactQuery';

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
