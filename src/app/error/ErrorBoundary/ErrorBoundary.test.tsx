import React from 'react';

import { Screen } from '@/utils/testing/screen';
import { ErrorBoundary, ErrorBoundaryProps } from '.';

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

  it('renders children', () => {
    renderWithApp();

    const app = Screen.get.byTestId({ testId: 'app' });
    expect(app).toBeInTheDocument();
  });

  it('does not render children if error happens', () => {
    renderWithAppThrows();

    const app = Screen.query.byTestId({ testId: 'app' });
    expect(app).not.toBeInTheDocument();
  });

  it('renders error page if error happens', () => {
    renderWithAppThrows();

    const errorPage = Screen.get.byTestId({ testId: 'error-page' });
    expect(errorPage).toBeInTheDocument();
  });
});
