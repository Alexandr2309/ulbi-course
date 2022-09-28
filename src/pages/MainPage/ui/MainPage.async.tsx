import { lazy } from 'react';

export const MainPageAsync = lazy(async () => new Promise((res) => (
  setTimeout(() => {
    // @ts-expect-error
    res(import('./MainPage'));
  }, 1500)
)));
