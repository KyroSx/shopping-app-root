import { useMutation } from 'react-query';

import {
  UseMutationHandlerParams,
  UseMutationHandlerReturn,
} from './useMutationHandler.types';
import { validateParams } from '@/infra/query/validate';

export function useMutationHandler<
  TData = unknown,
  TError = unknown,
  TVariables = void,
  TContext = unknown,
>({
  key,
  function: fn,
  ...options
}: UseMutationHandlerParams<
  TData,
  TError,
  TVariables,
  TContext
>): UseMutationHandlerReturn<TData, TError, TVariables, TContext> {
  validateParams({ key, fn });

  return useMutation(fn, {
    mutationKey: key,
    ...options,
  });
}
