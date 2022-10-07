import React, { FC, useMemo, useState } from 'react';
import ThemeContext, { LOCAL_STORAGE_THEME_KEY, Theme } from '../lib/ThemeContext';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

interface ThemeContextProviderProps {
  initialTheme?: Theme
}

export const ThemeContextProvider: FC<ThemeContextProviderProps> = (props) => {
  const { children, initialTheme } = props;

  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

  const defaultProps = useMemo(() => ({
    theme,
    setTheme,
  }), [theme]);
  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};
