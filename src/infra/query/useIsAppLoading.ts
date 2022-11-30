import { useIsFetching } from 'react-query';

export function useIsAppLoading() {
  const isFetching = useIsFetching();

  return {
    isLoading: isFetching,
  };
}
