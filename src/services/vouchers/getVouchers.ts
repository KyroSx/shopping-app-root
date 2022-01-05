import { request } from '@/http/request';
import { Endpoints } from '@/services/endpoints';
import { HttpMethods, HttpStatusCodes } from '@/http/codes';
import { Vouchers } from '@/types';
import { UnexpectedError } from '@/errors/UnexpectedError';

type RequestOutput = {
  vouchers: Vouchers;
};

export async function getVouchers() {
  const response = await request<RequestOutput>({
    url: Endpoints.vouchers.all(),
    method: HttpMethods.get,
  });

  switch (response.statusCode) {
    case HttpStatusCodes.ok:
      return response.body.vouchers;
    case HttpStatusCodes.serverError:
    default:
      throw new UnexpectedError();
  }
}
