import { screen, waitFor } from '@testing-library/react';
import { Loading } from '@/ui/components/Loading/Loading';
import { useIsAppLoading } from '@/hooks/useIsAppLoading';
import { Screen } from '@/utils/testing/screen';

jest.mock('@/hooks/useIsAppLoading');

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

  it('renders loading if isFetching', async () => {
    setUpFetching();

    const loading = await screen.findByTestId('loading');
    expect(loading).toBeInTheDocument();
  });

  it('doest not render loading if not isFetching', async () => {
    setUpNotFetching();

    await waitFor(() => {
      const loading = screen.queryByTestId('loading');
      expect(loading).not.toBeInTheDocument();
    });
  });
});
