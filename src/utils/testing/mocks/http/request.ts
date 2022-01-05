import { HttpStatusCodes } from '@/http/codes';
import { request } from '@/http/request';
import { delay } from '@/utils/time';
import { makeHttpResponse } from '@/utils/testing';

export const mockRequestToSucceed = <T>(
  body: T,
  statusCode = HttpStatusCodes.ok,
) =>
  (request as jest.Mock).mockImplementationOnce(async () => {
    await delay(0.5);

    return makeHttpResponse({
      body,
      statusCode,
    });
  });
