import { request } from '@/http/request';
import { Endpoints } from '@/services/endpoints';
import { HttpMethods } from '@/http/codes';
import { Vouchers } from '@/types';

type RequestOutput = {
  vouchers: Vouchers;
};

export async function getVouchers() {
  const response = await request<RequestOutput>({
    url: Endpoints.vouchers.all(),
    method: HttpMethods.get,
  });

  return response.body.vouchers;
}
