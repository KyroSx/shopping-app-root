import { isListEmpty } from '@/utils/list/isEmpty';

function isEmptyArray(key: any): boolean {
  return Array.isArray(key) && isListEmpty(key);
}

function isNotFunction(fn: any): boolean {
  return typeof fn !== 'function';
}

export function validateParams({ key, fn }: any): void {
  if (!key && !fn) {
    throw new Error('key and function are required');
  }

  if (!key && fn) {
    throw new Error('key is required');
  }

  if (key && !fn) {
    throw new Error('function is required');
  }

  if (isEmptyArray(key)) {
    throw new Error('key is required');
  }

  if (isNotFunction(fn)) {
    throw new Error('function must be a function');
  }
}
