import { HttpRequest, HttpResponse } from '@/http/request';
import { HttpMethods, HttpStatusCodes } from '@/http/codes';

export function makeBody<T>(body: T = {} as any) {
  return {
    id: 'any-id',
    ...body,
  };
}

export function makeHttpRequest(
  request: Partial<HttpRequest> = {},
): HttpRequest {
  return {
    method: HttpMethods.get,
    url: 'any-url',
    body: makeBody(),
    ...request,
  };
}

export function makeHttpResponse<T = any>(
  response: Partial<HttpResponse<T>> = {},
): HttpResponse<T> {
  return {
    body: undefined as any,
    statusCode: HttpStatusCodes.ok,
    ...response,
  };
}
