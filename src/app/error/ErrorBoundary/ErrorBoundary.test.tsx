import { screen } from '@testing-library/react';
import React from 'react';

import { Screen } from '@/utils/testing/screen';
import { ErrorBoundary, ErrorBoundaryProps } from '@/app/error';

describe(ErrorBoundary, () => {
  const render = (props: ErrorBoundaryProps) =>
    Screen.renderWithProviders(ErrorBoundary, props);
  const renderWithApp = () => render({ children: <App /> });
  const renderWithAppThrows = () => render({ children: <AppThrows /> });

  function AppThrows() {
    throw new Error('💥');

    // eslint-disable-next-line no-unreachable
    return <>error</>;
  }

  function App() {
    return <div data-testid="app">this-is-a-children</div>;
  }

  it('renders children', async () => {
    renderWithApp();

    const app = await screen.findByTestId('app');
    expect(app).toBeInTheDocument();
  });

  it('does not render children if error happens', async () => {
    renderWithAppThrows();

    const app = screen.queryByTestId('app');
    expect(app).not.toBeInTheDocument();
  });

  it('renders error page if error happens', async () => {
    renderWithAppThrows();

    const errorPage = await screen.findByTestId('error-page');
    expect(errorPage).toBeInTheDocument();
  });
});
