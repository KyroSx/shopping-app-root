import { getProducts } from '@/services/products';
import { request } from '@/http/request';
import { HttpMethods } from '@/http/codes';
import { Endpoints } from '@/services/endpoints';

jest.mock('@/http/request/request');

describe(getProducts, () => {
  it('calls request with correct params', async () => {
    await getProducts();

    expect(request).toHaveBeenCalledWith({
      url: Endpoints.products.all(),
      method: HttpMethods.get,
    });
  });
});
