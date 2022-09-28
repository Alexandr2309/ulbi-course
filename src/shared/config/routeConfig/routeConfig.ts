export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
}

export const RoutesPath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
};
