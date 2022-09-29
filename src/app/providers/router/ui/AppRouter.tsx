import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routerConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';

export const AppRouter = () => (
  <Suspense fallback={<PageLoader />}>
    <Routes>
      {Object.values(routeConfig).map(({ element, path }) => (
        <Route
          path={path}
          element={<div className="page-wrapper">{element}</div>}
          key={path}
        />
      ))}
    </Routes>
  </Suspense>
);
