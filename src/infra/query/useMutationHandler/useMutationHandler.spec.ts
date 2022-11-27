import { waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import * as ReactQuery from 'react-query';

import { useMutationHandler } from './useMutationHandler';
import { renderReactQueryHook } from '@/utils/testing/screen/render';
import { randomItemFromList } from '@/utils/list/randomItemFromList';

describe(useMutationHandler, () => {
  const setUp = (params = {}) => {
    const hook = renderReactQueryHook(useMutationHandler, params);

    return {
      hook,
      params,
    };
  };

  const ParamsMock = {
    getKey() {
      return ['key'];
    },
    getFunction() {
      return jest.fn().mockResolvedValue(this.getData());
    },
    getData() {
      return { data: 'data' };
    },
  };

  it('returns useMutation props before function call', async () => {
    const { hook } = setUp({
      key: ParamsMock.getKey(),
      function: ParamsMock.getFunction(),
    });

    await waitFor(() => {
      expect(hook.result.current).toEqual(
        expect.objectContaining({
          data: undefined,
          mutate: expect.any(Function),
          status: 'idle',
          isIdle: true,
          isLoading: false,
          isError: false,
          isSuccess: false,
        }),
      );
    });
  });

  it('returns useMutation props after function call', async () => {
    const { hook } = setUp({
      key: ParamsMock.getKey(),
      function: ParamsMock.getFunction(),
    });

    act(() => {
      hook.result.current.mutate();
    });

    await waitFor(() => {
      expect(hook.result.current).toEqual(
        expect.objectContaining({
          data: ParamsMock.getData(),
          mutate: expect.any(Function),
          status: 'success',
          isIdle: false,
          isLoading: false,
          isError: false,
          isSuccess: true,
        }),
      );
    });
  });

  describe('errors', () => {
    it('has no key or function params', async () => {
      const { hook } = setUp();

      expect(hook.result.error).toEqual(
        new Error('key and function are required'),
      );
    });

    it('has key as empty array', async () => {
      const { hook } = setUp({
        key: [],
        function: ParamsMock.getFunction(),
      });

      expect(hook.result.error).toEqual(new Error('key is required'));
    });

    it('has key as empty string', async () => {
      const { hook } = setUp({
        key: '' as any,
        function: ParamsMock.getFunction(),
      });

      expect(hook.result.error).toEqual(new Error('key must be an array'));
    });

    it('has key as anything but array', async () => {
      const { hook } = setUp({
        key: randomItemFromList([null, undefined, 1, 'string', {}]) as any,
        function: ParamsMock.getFunction(),
      });

      expect(hook.result.error).toEqual(new Error('key must be an array'));
    });

    it('has function as empty', async () => {
      const { hook } = setUp({
        key: ParamsMock.getKey(),
        function: undefined as any,
      });

      expect(hook.result.error).toEqual(new Error('function is required'));
    });

    it('has function as any but function', async () => {
      const { hook } = setUp({
        key: ParamsMock.getKey(),
        function: [] as any,
      });

      expect(hook.result.error).toEqual(
        new Error('function must be a function'),
      );
    });
  });

  describe('react-query', () => {
    const mockUseMutation = () => {
      jest.spyOn(ReactQuery, 'useMutation');
    };

    beforeAll(() => {
      mockUseMutation();
    });

    it('bypasses key and function to useMutation', async () => {
      const { params } = setUp({
        key: ParamsMock.getKey(),
        function: ParamsMock.getFunction(),
      });

      await waitFor(() => {
        expect(ReactQuery.useMutation).toHaveBeenCalledWith(
          params.function,
          expect.objectContaining({ mutationKey: params.key }),
        );
      });
    });

    it('bypasses options', async () => {
      const { params } = setUp({
        key: ParamsMock.getKey(),
        function: ParamsMock.getFunction(),
        onSuccess: jest.fn(),
        onError: jest.fn(),
        onSettled: jest.fn(),
      });

      await waitFor(() => {
        expect(ReactQuery.useMutation).toHaveBeenCalledWith(
          params.function,
          expect.objectContaining({
            mutationKey: params.key,
            onSuccess: params.onSuccess,
            onError: params.onError,
            onSettled: params.onSettled,
          }),
        );
      });
    });
  });
});
