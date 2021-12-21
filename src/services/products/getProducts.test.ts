import { getProducts, Products } from '@/services/products';
import { request } from '@/http/request';
import { HttpMethods } from '@/http/codes';
import { Endpoints } from '@/services/endpoints';
import { makeHttpResponse } from '@/utils/testing';

jest.mock('@/http/request/request');

describe(getProducts, () => {
  const mockRequestToSucceed = (products: Products) =>
    (request as jest.Mock).mockReturnValue(
      makeHttpResponse({
        body: products,
      }),
    );

  function makeProducts() {
    return [
      { id: 1, name: 'Banana', price: 10.0, available: 10 },
      { id: 2, name: 'Apple', price: 20.0, available: 15 },
      { id: 3, name: 'Orange', price: 30.0, available: 8 },
      { id: 4, name: 'Mango', price: 15.0, available: 20 },
    ];
  }

  it('calls request with correct params', async () => {
    await getProducts();

    expect(request).toHaveBeenCalledWith({
      url: Endpoints.products.all(),
      method: HttpMethods.get,
    });
  });

  it('returns product list if request succeeds', async () => {
    const products = makeProducts();
    mockRequestToSucceed(products);

    const productsOutput = await getProducts();

    expect(productsOutput).toEqual(products);
  });
});
