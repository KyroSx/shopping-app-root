import * as RTH from '@testing-library/react-hooks';
import { QueryProvider } from '@/infra';

type Hook<T> = (input?: T) => any;
type Wrapper<T> = RTH.WrapperComponent<T>;

export type HookResult<T> = RTH.RenderHookResult<T, any, RTH.Renderer<T>>;

export function renderHook<T = undefined>(
  hook: Hook<T>,
  input?: T,
  wrapper?: Wrapper<T>,
) {
  return RTH.renderHook(() => hook(input), { wrapper });
}

export function renderReactQueryHook<T = undefined>(hook: Hook<T>, input?: T) {
  return renderHook(hook, input, QueryProvider);
}
