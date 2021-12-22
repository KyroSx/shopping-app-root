import React from 'react';
import ReactDOM from 'react-dom';
import { App } from '@/app';
import { Router } from '@/app/routes/Router';

ReactDOM.render(
  <App>
    <Router />
  </App>,
  document.getElementById('root'),
);
