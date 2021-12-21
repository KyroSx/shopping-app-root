import { request } from '@/http/request';
import { HttpMethods } from '@/http/codes';
import { Endpoints } from '@/services/endpoints';

export async function getProducts() {
  await request({
    url: Endpoints.products.all(),
    method: HttpMethods.get,
  });
}
