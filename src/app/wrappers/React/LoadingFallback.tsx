import React from 'react';

export const LoadingFallback: React.FC = ({ children }) => {
  return <React.Suspense fallback="Loading...">{children}</React.Suspense>;
};
