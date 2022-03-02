import { getVouchers } from '@/services/vouchers/getVouchers';
import { Endpoints } from '@/services/endpoints';
import { HttpMethods, HttpStatusCodes } from '@/http/codes';
import { request } from '@/http/request';
import { makeVouchers } from '@/utils/testing/factories/vouchers';
import { mockRequestToSucceed } from '@/utils/testing/mocks/http/request';
import { UnexpectedError } from '@/errors/UnexpectedError';

jest.mock('@/http/request');

describe(getVouchers, () => {
  const setUpSuccess = () => {
    const vouchers = makeVouchers();
    mockRequestToSucceed({ vouchers });

    return {
      vouchers,
    };
  };

  const setUpError = (status: HttpStatusCodes) => {
    mockRequestToSucceed([], status);
  };

  it('calls request with correct input', async () => {
    setUpSuccess();

    await getVouchers();

    expect(request).toHaveBeenCalledWith({
      url: Endpoints.vouchers.all(),
      method: HttpMethods.get,
    });
  });

  it('returns vouchers', async () => {
    const { vouchers } = setUpSuccess();

    const vouchersReturned = await getVouchers();

    expect(vouchersReturned).toEqual(vouchers);
  });

  const statusCodes = [HttpStatusCodes.serverError, HttpStatusCodes.notFound];
  it.each(statusCodes)(
    'throws UnexpectedError if statusCode is %s',
    async errorStatusCode => {
      setUpError(errorStatusCode);

      try {
        await getVouchers();
      } catch (error) {
        expect(error).toEqual(new UnexpectedError());
      }
    },
  );
});
