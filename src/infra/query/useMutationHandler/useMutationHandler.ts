import { useMutation } from 'react-query';

import { UseMutationHandlerParams } from './useMutationHandler.types';
import { validateParams } from '@/infra/query/validate';

export function useMutationHandler({
  key,
  function: fn,
  ...options
}: UseMutationHandlerParams) {
  validateParams({ key, fn });

  return useMutation(fn, {
    mutationKey: key,
    ...options,
  });
}
