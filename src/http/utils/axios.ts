import { AxiosError } from 'axios';
import { HttpStatusCodes } from '@/http/codes';

export const isAxiosError = (error: AxiosError | undefined) =>
  !!error?.isAxiosError;

const axiosErrorHasStatusCode = (statusCode: HttpStatusCodes) => (
  error: AxiosError,
) => error.response?.status === statusCode;

export const isAxiosErrorNotFound = axiosErrorHasStatusCode(
  HttpStatusCodes.notFound,
);
