import React from 'react';
import { getByTestId, getByText, render, screen } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import { Screen } from './index';
import { App } from '@/app';
import {
  Options,
  OptionsByLevel,
  OptionsByText,
} from '@/utils/testing/screen/query/get/get.types';

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

      describe('by text', () => {
        const [text, container, options] = [
          'any-text',
          {} as any as HTMLElement,
          { exact: true, selector: '*' } as OptionsByText,
        ];

        it('calls screen.getByText', async () => {
          Screen.get.byText({ text });

          expect(screen.getByText).toHaveBeenCalledWith(text, {});
        });

        it('calls screen.getByText with options', async () => {
          Screen.get.byText({ text, ...options });

          expect(screen.getByText).toHaveBeenCalledWith(text, options);
        });

        it('calls getByText with container', async () => {
          Screen.get.byText({ text, container });

          expect(getByText).toHaveBeenCalledWith(container, text, {});
        });

        it('calls getByText with options', async () => {
          Screen.get.byText({ text, container, ...options });

          expect(getByText).toHaveBeenCalledWith(container, text, options);
        });
      });

      describe('by role', () => {
        const [role, container, options] = [
          'role',
          {} as any as HTMLElement,
          { exact: true } as OptionsByLevel,
        ];

        it('calls screen.getByRole', async () => {
          Screen.get.byRole({ role });

          expect(screen.getByRole).toHaveBeenCalledWith(role, {});
        });

        it('calls screen.getByRole with options', async () => {
          Screen.get.byRole({ role, ...options });

          expect(screen.getByRole).toHaveBeenCalledWith(role, options);
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
