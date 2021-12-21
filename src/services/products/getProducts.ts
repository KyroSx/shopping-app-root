import { request } from '@/http/request';
import { HttpMethods } from '@/http/codes';
import { Endpoints } from '@/services/endpoints';

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

  return response?.body;
}
