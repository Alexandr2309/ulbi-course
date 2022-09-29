import React, { Suspense } from 'react';
import { AppRoutes, RoutesPath } from 'shared/config/routeConfig/routeConfig';
import type { RouteProps } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { PageLoader } from 'widgets/PageLoader';

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutesPath.main,
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutesPath.about,
    element: <AboutPage />,
  },
};

export const AppRouter = () => (
  <Routes>
    {Object.values(routeConfig).map(({ path, element }) => (
      <Route
        key={path}
        path={path}
        element={(
          <Suspense fallback={<PageLoader />}>
            <div className="page-wrapper">
              {element}
            </div>
          </Suspense>
        )}
      />
    ))}
  </Routes>
);
