import { AxiosError } from 'axios';
import { HttpMethods, HttpStatusCodes } from '@/http/codes';

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
