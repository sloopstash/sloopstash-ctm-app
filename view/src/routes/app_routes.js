import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import PrivateRoute from './private_route';
import PublicRoute from './public_route';
import { routesConfig } from '../helper/route_config';

const AppRoutes = () => {
  const renderRoutes = (routes) =>
    routes.map(({ path, element: Element, type, children }) => {
      if (type === "public") {
        return (
          <Route
            key={path}
            path={path}
            element={
              <PublicRoute>
                <Element />
              </PublicRoute>
            }
          />
        );
      }

      if (type === "private") {
        return (
          <Route
            key={path}
            path={path}
            element={
              <PrivateRoute>
                <Element />
              </PrivateRoute>
            }
          >
            {children && renderRoutes(children)}
          </Route>
        );
      }

      if (type === "catchAll") {
        return <Route key={path} path={path} element={<Element />} />;
      }

      return <Route key={path} path={path} element={<Element />} />;
    });

  return <Routes>{renderRoutes(routesConfig)}</Routes>;
};

export default AppRoutes;
