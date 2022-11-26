import { useQuery } from 'react-query';

import { validateParams } from './validateParams';
import {
  UseQueryHandlerParams,
  UseQueryHandlerReturn,
  Key,
} from './useQueryHandler.types';

export function useQueryHandler<
  TQueryFnData = unknown,
  TError = unknown,
  TData = TQueryFnData,
  TQueryKey extends Key = Key,
>({
  key,
  function: fn,
  ...options
}: UseQueryHandlerParams<
  TQueryFnData,
  TError,
  TData,
  TQueryKey
>): UseQueryHandlerReturn<TData, TError> {
  validateParams({ key, fn });

  return useQuery(key, fn, options);
}
