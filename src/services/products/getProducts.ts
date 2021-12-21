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

type RequestOutput = {
  products: Products;
};

export async function getProducts(): Promise<Products> {
  const response = await request<RequestOutput>({
    url: Endpoints.products.all(),
    method: HttpMethods.get,
  });

  switch (response.statusCode) {
    case HttpStatusCodes.ok:
      return response.body.products;
    case HttpStatusCodes.serverError:
    default:
      throw new UnexpectedError();
  }
}
