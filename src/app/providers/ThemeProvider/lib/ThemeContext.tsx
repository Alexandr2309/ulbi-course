import { createContext } from 'react';

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

type IThemeContext = {
  theme?: Theme;
  setTheme?: (theme: Theme) => void;
};

const ThemeContext = createContext<IThemeContext>({});
export default ThemeContext;

export const LOCAL_STORAGE_THEME_KEY = 'theme';
