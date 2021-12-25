import { QueryClient } from 'react-query';
import { Environment } from '@/config/environment';

export const QueryClientInstance = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: !Environment.isTesting(),
    },
  },
});
