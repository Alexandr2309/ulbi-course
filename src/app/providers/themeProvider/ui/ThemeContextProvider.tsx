import React, { ReactNode, useMemo, useState } from 'react';
import ThemeContext, { LOCAL_STORAGE_THEME_KEY, Theme } from '../lib/ThemeContext';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;
document.body.className = defaultTheme;

interface ThemeContextProviderProps {
  initialTheme?: Theme;
  children: ReactNode;
}

export const ThemeContextProvider = (props: ThemeContextProviderProps) => {
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
