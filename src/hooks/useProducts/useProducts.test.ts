import { useProducts } from '@/hooks/useProducts';
import { getProducts } from '@/services/products';
import { makeProducts } from '@/utils/testing/factories/products';
import { mockGetProductsService } from '@/utils/testing/mocks/services/getProducts';
import { Screen } from '@/utils/testing/screen';

jest.mock('@/services/products/getProducts');

describe(useProducts, () => {
  const renderUseProducts = () => {
    const hook = Screen.renderReactQueryHook(useProducts);

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
});
