import {
  UseMutationOptions,
  UseMutationResult,
} from 'react-query/types/react/types';

export type Key = readonly (unknown | string)[];
type Function<T> = () => Promise<T>;

type ReactQueryOptions<
  TData = unknown,
  TError = unknown,
  TVariables = void,
  TContext = unknown,
> = Omit<
  UseMutationOptions<TData, TError, TVariables, TContext>,
  'mutationKey' | 'mutationFn'
>;

export interface UseMutationHandlerParams<
  TData = unknown,
  TError = unknown,
  TVariables = void,
  TContext = unknown,
> extends ReactQueryOptions<TData, TError, TVariables, TContext> {
  key: Key;
  function: Function<TData>;
}

export type UseMutationHandlerReturn<TData, TError, TVariables, TContext> =
  UseMutationResult<TData, TError, TVariables, TContext>;
