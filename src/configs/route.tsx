import { RouteObject } from 'react-router/dist/lib/context';
import { Home } from '@/pages/Home';
import React from 'react';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
    loader: () => {
      return {
        name: 'home',
      };
    },
  },
];
