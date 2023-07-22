import React, { ReactNode, useMemo, useState } from 'react';
import ThemeContext from '@/shared/lib/context/ThemeContext';
import { Theme } from '@/shared/const/theme';
import { useJsonSettings } from '@/entities/User';

interface ThemeContextProviderProps {
  initialTheme?: Theme;
  children: ReactNode;
}

export const ThemeContextProvider = (props: ThemeContextProviderProps) => {
  const { children, initialTheme } = props;

  const { theme: defaultTheme = Theme.LIGHT } = useJsonSettings();
  document.body.className = defaultTheme;

  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme],
  );
  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};
