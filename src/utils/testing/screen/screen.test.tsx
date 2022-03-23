import React from 'react';
import { getByTestId, render, screen } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { Screen } from './index';
import { App } from '@/app';
import { Options } from '@/utils/testing/screen/query/get/get.types';

jest.mock('@testing-library/react');
jest.mock('@testing-library/react-hooks');

describe('Screen', () => {
  beforeEach(jest.resetAllMocks);

  describe('queries', () => {
    describe('get', () => {
      describe('by test id', () => {
        const [testId, container, options] = [
          'any-test-id',
          {} as any as HTMLElement,
          { exact: true } as Options,
        ];

        it('calls screen.getByTestId', async () => {
          Screen.get.byTestId({ testId });

          expect(screen.getByTestId).toHaveBeenCalledWith(testId, {});
        });

        it('calls screen.getByTestId with options', async () => {
          Screen.get.byTestId({ testId, ...options });

          expect(screen.getByTestId).toHaveBeenCalledWith(testId, options);
        });

        it('calls getByTestId with container', async () => {
          Screen.get.byTestId({ testId, container });

          expect(getByTestId).toHaveBeenCalledWith(container, testId, {});
        });

        it('calls getByTestId with options', async () => {
          Screen.get.byTestId({ testId, container, ...options });

          expect(getByTestId).toHaveBeenCalledWith(container, testId, options);
        });
      });
    });
  });

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
