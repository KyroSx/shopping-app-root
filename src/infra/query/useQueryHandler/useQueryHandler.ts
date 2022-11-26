import { useQuery } from 'react-query';

import { validateParams } from './validateParams';
import { UseQueryHandlerParams } from './useQueryHandler.types';

export function useQueryHandler({
  key,
  function: fn,
  ...options
}: UseQueryHandlerParams) {
  validateParams({ key, fn });

  return useQuery(key, fn, options);
}
