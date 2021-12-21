import { request } from '@/http/request';
import { HttpMethods, HttpStatusCodes } from '@/http/codes';
import { Endpoints } from '@/services/endpoints';
import { UnexpectedError } from '@/errors/UnexpectedError';

export type Product = {
  id: number;
  name: string;
  price: number;
  available: number;
};
export type Products = Product[];

export async function getProducts(): Promise<Products> {
  const response = await request<Products>({
    url: Endpoints.products.all(),
    method: HttpMethods.get,
  });

  switch (response.statusCode) {
    case HttpStatusCodes.ok:
      return response?.body;
    case HttpStatusCodes.serverError:
    default:
      throw new UnexpectedError();
  }
}
