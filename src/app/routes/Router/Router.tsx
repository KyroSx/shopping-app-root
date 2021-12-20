import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import { Routes } from '@/app/routes/Routes';

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};
