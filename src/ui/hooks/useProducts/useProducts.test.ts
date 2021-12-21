import { useProducts } from '@/ui/hooks/useProducts';
import { renderReactQueryHook } from '@/utils/testing';
import { getProducts, Products } from '@/services/products';
import { makeProducts } from '@/utils/testing/factories/products';
import { UnexpectedError } from '@/errors/UnexpectedError';

jest.mock('@/services/products/getProducts');

describe(useProducts, () => {
  const renderUseProducts = () => {
    const hook = renderReactQueryHook(useProducts);

    return { hook };
  };

  const mockGetProductsService = (products: Products) =>
    (getProducts as jest.Mock).mockReturnValue(products);

  const mockGetProductsServiceToThrow = () =>
    (getProducts as jest.Mock).mockImplementationOnce(async () => {
      throw new UnexpectedError();
    });

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
    expect(hook.result.current.hasUnexpectedErrorHappened).toEqual(true);
  });
});
