import { getProducts } from '@/services/products';
import { request } from '@/http/request';
import { HttpMethods, HttpStatusCodes } from '@/http/codes';
import { Endpoints } from '@/services/endpoints';
import { UnexpectedError } from '@/errors/UnexpectedError';
import { makeProducts } from '@/utils/testing/factories/products';
import { mockRequestToSucceed } from '@/utils/testing/mocks/http/request';

jest.mock('@/http/request/request');

describe(getProducts, () => {
  const setUpSuccess = () => {
    const products = makeProducts();
    mockRequestToSucceed({ products }, HttpStatusCodes.ok);

    return {
      products,
    };
  };

  const setUpError = (status: HttpStatusCodes) => {
    mockRequestToSucceed([], status);
  };

  it('calls request with correct params', async () => {
    setUpSuccess();

    await getProducts();

    expect(request).toHaveBeenCalledWith({
      url: Endpoints.products.all(),
      method: HttpMethods.get,
    });
  });

  it('returns product list if request succeeds', async () => {
    const { products } = setUpSuccess();

    const productsOutput = await getProducts();

    expect(productsOutput).toEqual(products);
  });

  const statusCodes = [HttpStatusCodes.serverError, HttpStatusCodes.notFound];
  it.each(statusCodes)(
    'throws UnexpectedError if statusCode is %s',
    async errorStatusCode => {
      setUpError(errorStatusCode);

      try {
        await getProducts();
      } catch (error) {
        expect(error).toEqual(new UnexpectedError());
      }
    },
  );
});
