import React, { createContext } from 'react';

export enum Theme {
  DARK = 'app_dark_theme',
  LIGHT = 'app_light_theme'
}

export interface ThemeContextProps {
  theme?: Theme;
  setTheme?: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextProps>({});
export default ThemeContext;

export const LOCAL_STORAGE_THEME_KEY = 'theme';
