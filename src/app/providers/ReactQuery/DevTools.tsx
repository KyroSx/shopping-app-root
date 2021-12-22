import React from 'react';
import { ReactQueryDevtools } from 'react-query/devtools';

export const DevTools = () => {
  return <ReactQueryDevtools initialIsOpen={false} />;
};
