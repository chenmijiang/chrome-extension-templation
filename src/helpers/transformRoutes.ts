import {
  createHashRouter,
  createBrowserRouter,
  RouteObject,
} from 'react-router-dom';
interface TransformRoutesOptions {
  type?: 'hash' | 'browser';
}

export function transformRoutes(routes: RouteObject[], options?: TransformRoutesOptions) {
  const { type = 'hash' } = options || {};

  if (type === 'hash') {
    return createHashRouter(routes);
  } else {
    return createBrowserRouter(routes);
  }
}
