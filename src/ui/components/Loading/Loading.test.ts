import { screen } from '@testing-library/react';
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

    expect(await screen.findByTestId('loading')).toBeInTheDocument();
  });
});
