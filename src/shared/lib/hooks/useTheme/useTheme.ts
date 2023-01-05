import { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';
import { Theme } from '@/shared/const/theme';
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localStorage';

export interface UseThemeResult {
  theme: Theme;
  toggleTheme: () => void;
}

export function useTheme(): UseThemeResult {
  const {
    theme,
    setTheme,
  } = useContext(ThemeContext);

  const toggleTheme = () => {
    let newTheme: Theme;

    switch (theme) {
    case Theme.DARK:
      newTheme = Theme.PINK;
      break;
    case Theme.PINK:
      newTheme = Theme.LIGHT;
      break;
    case Theme.LIGHT:
      newTheme = Theme.DARK;
      break;
    default:
      newTheme = Theme.LIGHT;
    }

    setTheme?.(newTheme);
    document.body.className = newTheme;
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };
  return {
    theme: theme || Theme.LIGHT,
    toggleTheme,
  };
}
