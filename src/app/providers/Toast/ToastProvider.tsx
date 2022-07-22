import React from 'react';
import { ToastContainer } from 'react-toastify';
import { ToastContainerProps } from 'react-toastify/dist/types';

import 'react-toastify/dist/ReactToastify.css';
import './ToastProvider.styles.css';

export const ToastProvider: React.FC = ({ children }) => {
  const options: ToastContainerProps = {
    position: 'top-right',
    // autoClose: 5000,
    closeOnClick: true,
  };

  return (
    <>
      {children}

      <ToastContainer {...options} />
    </>
  );
};
