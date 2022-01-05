import { request } from '@/http/request';
import { Endpoints } from '@/services/endpoints';
import { HttpMethods } from '@/http/codes';

export async function getVouchers() {
  await request({
    url: Endpoints.vouchers.all(),
    method: HttpMethods.get,
  });
}
