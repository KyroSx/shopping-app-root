import { useIsFetching } from 'react-query';

export function useReactQueryIsFetching() {
  const isFetching = useIsFetching();

  return {
    isLoading: isFetching,
  };
}
