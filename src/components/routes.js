import React from 'react';
import Body from './Body';
import NotFound from './NotFound';
import ProductListManager from './ProductListManager';
const routes = [
    {
      path: '/',
      exact: true,
      main: () => <Body />
    },
    {
      path: '/manager',
      exact: false,
      main: () => <ProductListManager />
    },
    {
      path: '',
      exact: false,
      main: () => <NotFound />
    }
  ];
export default routes;