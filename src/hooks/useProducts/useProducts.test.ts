import { useProducts } from '@/hooks/useProducts';
import { renderReactQueryHook } from '@/utils/testing';
import { getProducts } from '@/services/products';
import { makeProducts } from '@/utils/testing/factories/products';
import {
  mockGetProductsService,
  mockGetProductsServiceToThrow,
} from '@/utils/testing/mocks/services/getProducts';

jest.mock('@/services/products/getProducts');

describe(useProducts, () => {
  const renderUseProducts = () => {
    const hook = renderReactQueryHook(useProducts);

    return { hook };
  };

  const setUpSuccess = () => {
    const products = makeProducts();
    mockGetProductsService(products);

    const { hook } = renderUseProducts();

    return {
      hook,
      products,
    };
  };

  const setUpError = () => {
    mockGetProductsServiceToThrow();
    const { hook } = renderUseProducts();

    return {
      hook,
    };
  };

  it('calls getProducts service', async () => {
    const { hook } = setUpSuccess();

    await hook.waitForNextUpdate();

    expect(getProducts).toHaveBeenCalledTimes(1);
  });

  it('returns products if getProducts succeeds', async () => {
    const { hook, products } = setUpSuccess();

    expect(hook.result.current.products).toEqual([]);
    await hook.waitForNextUpdate();
    expect(hook.result.current.products).toEqual(products);
  });

  it('returns hasUnexpectedErrorHappened if getProducts throws', async () => {
    const { hook } = setUpError();

    await hook.waitForNextUpdate();
    expect(hook.result.current.status.isUnexpectedError).toEqual(true);
  });
});
