import { getProducts, Products } from '@/services/products';
import { delay } from '@/utils/time';
import { UnexpectedError } from '@/errors/UnexpectedError';

export const mockGetProductsService = (products: Products) => {
  return (getProducts as jest.Mock).mockImplementationOnce(async () => {
    await delay(0.5);

    return products;
  });
};

export const mockGetProductsServiceToThrow = () => {
  return (getProducts as jest.Mock).mockImplementationOnce(async () => {
    await delay(0.5);

    throw new UnexpectedError();
  });
};
