import { waitFor } from '@testing-library/react';

import * as ReactQuery from 'react-query';
import { renderReactQueryHook } from '@/utils/testing/screen/render';

import { useQueryHandler } from '.';
import { UseQueryHandlerParams } from './useQueryHandler.types';

describe(useQueryHandler, () => {
  const setUp = (params: UseQueryHandlerParams) => {
    const hook = renderReactQueryHook(useQueryHandler, params);

    return {
      hook,
      params,
    };
  };

  const ParamsMock = {
    getKey() {
      return 'key';
    },
    getFunction() {
      return jest.fn().mockResolvedValue(this.getData());
    },
    getData() {
      return { data: 'data' };
    },
  };

  it('calls function', async () => {
    const { params } = setUp({
      key: ParamsMock.getKey(),
      function: ParamsMock.getFunction(),
    });

    await waitFor(() => {
      expect(params.function).toHaveBeenCalled();
    });
  });

  describe('errors', () => {
    it('has no key or function params', async () => {
      const { hook } = setUp({});

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
        key: '',
        function: ParamsMock.getFunction(),
      });

      expect(hook.result.error).toEqual(new Error('key is required'));
    });

    it('has function as empty', async () => {
      const { hook } = setUp({
        key: ParamsMock.getKey(),
        function: undefined,
      });

      expect(hook.result.error).toEqual(new Error('function is required'));
    });

    it('has function as any but function', async () => {
      const { hook } = setUp({
        key: ParamsMock.getKey(),
        function: [],
      });

      expect(hook.result.error).toEqual(
        new Error('function must be a function'),
      );
    });
  });

  it('returns useQuery props', async () => {
    const { hook } = setUp({
      key: ParamsMock.getKey(),
      function: ParamsMock.getFunction(),
    });

    await waitFor(() => {
      expect(hook.result.current).toEqual(
        expect.objectContaining({
          data: ParamsMock.getData(),
          status: 'success',
          isLoading: false,
          isError: false,
          isSuccess: true,
          isFetching: false,
        }),
      );
    });
  });

  describe('react-query', () => {
    const mockUseQuery = () => {
      jest.spyOn(ReactQuery, 'useQuery');
    };

    beforeAll(() => {
      mockUseQuery();
    });

    it('bypasses key and function to useQuery', async () => {
      const { params } = setUp({
        key: ParamsMock.getKey(),
        function: ParamsMock.getFunction(),
      });

      await waitFor(() => {
        expect(ReactQuery.useQuery).toHaveBeenCalledWith(
          'key',
          params.function,
          expect.any(Object),
        );
      });
    });

    it('bypasses options to useQuery', async () => {
      const { params } = setUp({
        key: ParamsMock.getKey(),
        function: ParamsMock.getFunction(),
        retry: 1,
        enabled: true,
        staleTime: 1,
        onSuccess: jest.fn(),
        onError: jest.fn(),
        onSettled: jest.fn(),
      });

      await waitFor(() => {
        expect(ReactQuery.useQuery).toHaveBeenCalledWith(
          'key',
          params.function,
          {
            retry: 1,
            staleTime: 1,
            enabled: true,
            onSuccess: params.onSuccess,
            onError: params.onError,
            onSettled: params.onSettled,
          },
        );
      });
    });
  });
});
