import React from 'react';
import ReactDOM from 'react-dom';
import { App, setUpServer } from '@/app';
import { Router } from '@/app/routes/Router';

setUpServer();

ReactDOM.render(
  <App>
    <Router />
  </App>,
  document.getElementById('root'),
);
