import React from 'react';
import { useErrorBoundary } from 'use-error-boundary';
import { ErrorPage } from '@/app/error/ErrorPage';

export interface ErrorBoundaryProps {
  children: React.ReactNode;
}

export const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ children }) => {
  const { ErrorBoundary: ErrorContainer, didCatch } = useErrorBoundary();

  return didCatch ? <ErrorPage /> : <ErrorContainer>{children}</ErrorContainer>;
};
