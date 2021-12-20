import { AxiosError, AxiosResponse } from 'axios';
import { api } from '@/http/axios/api';
import { HttpMethods, HttpStatusCodes } from '@/http/codes';
import { isAxiosError } from '@/http/utils/axios';

export type HttpRequest = {
  url: string;
  method: HttpMethods;
  body?: any;
  queryParams?: any;
};

export type HttpResponse<T = any> = {
  body: T;
  statusCode: HttpStatusCodes;
  error?: AxiosError;
};

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
  } catch (error) {
    if (!isAxiosError(error)) throw error;

    return {
      statusCode: error.response.status,
      body: error.response.data,
      error,
    };
  }
}
