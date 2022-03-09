import React from 'react';
import { render } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { Screen } from './index';
import { App } from '@/app';

jest.mock('@testing-library/react');
jest.mock('@testing-library/react-hooks');

describe('Screen', () => {
  beforeEach(jest.resetAllMocks);

  describe('render', () => {
    describe('components', () => {
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

      it('calls render with providers, with props', () => {
        const props = { children: 'children' };
        Screen.renderWithProviders(FakeComponent, props);

        expect(render).toHaveBeenCalledWith(
          <App>
            <FakeComponent {...props} />
          </App>,
        );
      });
    });

    describe('hooks', () => {
      describe('renderHook', () => {
        const useFakeHook = (input = {}) => {
          return input;
        };

        it('calls renderHook without input', () => {
          Screen.renderHook(useFakeHook);

          expect(renderHook).toHaveBeenCalled();
        });

        it('calls renderHook with input', () => {
          Screen.renderHook(useFakeHook, { input: true });

          expect(renderHook).toHaveBeenCalled();
        });
      });
    });
  });
});
