import { getVouchers } from '@/services/vouchers/getVouchers';
import { Endpoints } from '@/services/endpoints';
import { HttpMethods } from '@/http/codes';
import { request } from '@/http/request';

jest.mock('@/http/request');

describe(getVouchers, () => {
  it('calls request with correct input', async () => {
    await getVouchers();

    expect(request).toHaveBeenCalledWith({
      url: Endpoints.vouchers.all(),
      method: HttpMethods.get,
    });
  });
});
