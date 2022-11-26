import { UseQueryOptions, UseQueryResult } from 'react-query/types/react/types';

export type Key = readonly (unknown | string)[];

type Function<T> = () => Promise<T>;

type ReactQueryOptions<
  TQueryFnData,
  TError,
  TData,
  TQueryKey extends Key = Key,
> = Omit<
  UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
  'queryKey' | 'queryFn'
>;

export interface UseQueryHandlerParams<
  TQueryFnData = unknown,
  TError = unknown,
  TData = TQueryFnData,
  TQueryKey extends Key = Key,
> extends ReactQueryOptions<TQueryFnData, TError, TData, TQueryKey> {
  key: TQueryKey;
  function: Function<TQueryFnData>;
}

export type UseQueryHandlerReturn<TData, TError> = UseQueryResult<
  TData,
  TError
>;
