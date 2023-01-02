import { AxiosResponse } from 'axios';
import { api } from '@/http/axios/api';
import { isAxiosError } from '@/http/utils/axios';

import { HttpRequest, HttpResponse } from './request.types';

export async function request<T>(
  httpRequest: HttpRequest,
): Promise<HttpResponse<T>> {
  try {
    const apiResponse: AxiosResponse<T> = await api({
      data: httpRequest.body,
      method: httpRequest.method,
      url: httpRequest.url,
      params: httpRequest.queryParams,
    });

    return {
      body: apiResponse?.data,
      statusCode: apiResponse?.status,
    };
  } catch (error: any) {
    if (!isAxiosError(error)) throw error;

    return {
      statusCode: error.response.status,
      body: error.response.data,
      error,
    };
  }
}
