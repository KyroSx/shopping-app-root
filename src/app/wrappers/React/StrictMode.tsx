import React from 'react';

export const StrictMode: React.FC = ({ children }) => {
  return <React.StrictMode>{children}</React.StrictMode>;
};
