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

  beforeEach(jest.resetAllMocks);

  it('calls getProducts service', async () => {
    const { hook } = renderUseProducts();

    await hook.waitForNextUpdate();

    expect(getProducts).toHaveBeenCalledTimes(1);
  });

  it('returns products if getProducts succeeds', async () => {
    const products = makeProducts();
    mockGetProductsService(products);
    const { hook } = renderUseProducts();

    expect(hook.result.current.products).toEqual([]);
    await hook.waitForNextUpdate();
    expect(hook.result.current.products).toEqual(products);
  });

  it('returns hasUnexpectedErrorHappened if getProducts throws', async () => {
    mockGetProductsServiceToThrow();
    const { hook } = renderUseProducts();

    await hook.waitForNextUpdate();
    expect(hook.result.current.status.isUnexpectedError).toEqual(true);
  });
});
