import { getProducts, Products } from '@/services/products';
import { request } from '@/http/request';
import { HttpMethods, HttpStatusCodes } from '@/http/codes';
import { Endpoints } from '@/services/endpoints';
import { makeHttpResponse } from '@/utils/testing';
import { UnexpectedError } from '@/errors/UnexpectedError';
import { makeProducts } from '@/utils/testing/factories/products';

jest.mock('@/http/request/request');

describe(getProducts, () => {
  const mockRequestToSucceed = (
    products: Products,
    statusCode = HttpStatusCodes.ok,
  ) =>
    (request as jest.Mock).mockReturnValue(
      makeHttpResponse({
        body: { products },
        statusCode,
      }),
    );

  beforeEach(() => {
    mockRequestToSucceed(makeProducts(), HttpStatusCodes.ok);
  });

  it('calls request with correct params', async () => {
    await getProducts();

    expect(request).toHaveBeenCalledWith({
      url: Endpoints.products.all(),
      method: HttpMethods.get,
    });
  });

  it('returns product list if request succeeds', async () => {
    const products = makeProducts();
    mockRequestToSucceed(products, HttpStatusCodes.ok);

    const productsOutput = await getProducts();

    expect(productsOutput).toEqual(products);
  });

  const statusCodes = [HttpStatusCodes.serverError, HttpStatusCodes.notFound];
  it.each(statusCodes)(
    'throws UnexpectedError if statusCode is %s',
    async errorStatusCode => {
      mockRequestToSucceed([], errorStatusCode);

      try {
        await getProducts();
      } catch (error) {
        expect(error).toEqual(new UnexpectedError());
      }
    },
  );
});
