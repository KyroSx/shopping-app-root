import { request } from '@/http/request';
import {
  makeHttpRequest,
  makeHttpResponse,
} from '@/utils/testing/httpFactories';
import { api } from '@/http/axios';
import { HttpStatusCodes } from '@/http/codes';

jest.mock('@/http/axios/api');

describe(request, () => {
  const apiMock = (api as any) as jest.Mock;

  const mockApiSuccess = ({ body, status = HttpStatusCodes.ok }: any) =>
    apiMock.mockResolvedValue({ data: body, status });

  const mockApiFails = ({
    body,
    status = HttpStatusCodes.serverError,
    isAxiosError = true,
  }: any) =>
    apiMock.mockRejectedValue({
      response: { data: body, status },
      isAxiosError,
    });

  const mockApiToThrow = (error = new Error('any-error')) =>
    apiMock.mockImplementationOnce(() => {
      throw error;
    });

  it('calls axios api with same params', async () => {
    const httpRequest = makeHttpRequest();

    await request(httpRequest);

    expect(api).toHaveBeenCalledWith({
      data: httpRequest.body,
      method: httpRequest.method,
      url: httpRequest.url,
      params: httpRequest.queryParams,
    });
  });

  it('returns axios-response as http-response if it succeeds', async () => {
    const httpRequest = makeHttpRequest();
    const httpResponse = makeHttpResponse({ body: httpRequest.body });
    mockApiSuccess(httpResponse);

    const response = await request(httpRequest);

    expect(response).toEqual(httpResponse);
  });

  it('returns axios-response as http-response if it fails, without throw axios-error', async () => {
    const httpRequest = makeHttpRequest({ body: null });
    const httpResponse = makeHttpResponse({
      body: httpRequest.body,
      statusCode: HttpStatusCodes.serverError,
    });
    mockApiFails(httpResponse);

    const response = await request(httpRequest);

    expect(response).toEqual(expect.objectContaining(httpResponse));
    expect(() => request(httpRequest)).not.toThrow();
  });

  it('throws error if it is not an axios-error', async () => {
    const httpRequest = makeHttpRequest();
    mockApiToThrow();

    await expect(request(httpRequest)).rejects.toThrow();
  });
});
