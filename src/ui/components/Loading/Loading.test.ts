import { waitFor } from '@testing-library/react';
import { Loading } from '@/ui/components/Loading/Loading';
import { useIsAppLoading } from '@/infra';
import { Screen } from '@/utils/testing/screen';

jest.mock('@/infra/query/useIsAppLoading');

describe(Loading, () => {
  const renderLoading = () => {
    return {
      loading: Screen.renderWithProviders(Loading),
    };
  };

  const mockIsFetching = (isFetching = false) => {
    return (useIsAppLoading as jest.Mock).mockImplementationOnce(() => {
      return {
        isLoading: isFetching,
      };
    });
  };

  const setUpFetching = () => {
    mockIsFetching(true);
    renderLoading();
  };

  const setUpNotFetching = () => {
    mockIsFetching(false);
    renderLoading();
  };

  beforeEach(() => {
    jest.resetAllMocks();
    mockIsFetching();
  });

  it('renders loading if isFetching', () => {
    setUpFetching();

    const loading = Screen.get.byTestId({ testId: 'loading' });
    expect(loading).toBeInTheDocument();
  });

  it('doest not render loading if not isFetching', async () => {
    setUpNotFetching();

    await waitFor(() => {
      const loading = Screen.query.byTestId({ testId: 'loading' });
      expect(loading).not.toBeInTheDocument();
    });
  });
});
