import React from 'react';
import { render } from '@testing-library/react';
import { Screen } from './index';
import { App } from '@/app';

jest.mock('@testing-library/react');

describe('Screen', () => {
  describe('render', () => {
    const FakeComponent: React.FC = ({ children }) => {
      return <div>{children}</div>;
    };

    it('calls render with providers, without props', () => {
      Screen.renderWithProviders(FakeComponent);

      expect(render).toHaveBeenCalledWith(
        <App>
          <FakeComponent />
        </App>,
      );
    });
  });
});
