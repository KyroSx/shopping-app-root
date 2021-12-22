import { screen, waitFor } from '@testing-library/react';
import { Loading } from '@/ui/components/Loading/Loading';
import { renderWithProviders } from '@/utils/testing';
import { useReactQueryIsFetching } from '@/ui/hooks/useReactQueryIsFetching';

jest.mock('@/ui/hooks/useReactQueryIsFetching');

describe(Loading, () => {
  const renderLoading = () => {
    return {
      loading: renderWithProviders(Loading, {}),
    };
  };

  const mockIsFetching = (isFetching = false) => {
    return (useReactQueryIsFetching as jest.Mock).mockImplementationOnce(() => {
      return {
        isLoading: isFetching,
      };
    });
  };

  it('renders loading if isFetching', async () => {
    mockIsFetching(true);
    renderLoading();

    const loading = await screen.findByTestId('loading');
    expect(loading).toBeInTheDocument();
  });

  it('doest not render loading if not isFetching', async () => {
    mockIsFetching(false);
    renderLoading();

    await waitFor(() => {
      const loading = screen.queryByTestId('loading');
      expect(loading).not.toBeInTheDocument();
    });
  });
});
