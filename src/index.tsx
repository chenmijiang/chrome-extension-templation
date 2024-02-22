import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import { transformRoutes } from '@/helpers/transformRoutes';
import { routes } from '@/configs/route';

import './index.css';

const router = transformRoutes(routes);

const root = createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

