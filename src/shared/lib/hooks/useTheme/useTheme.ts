import { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';
import { Theme } from '@/shared/const/theme';

export interface UseThemeResult {
  theme: Theme;
  toggleTheme: (saveAction: (theme: Theme) => void) => void;
}

export function useTheme(): UseThemeResult {
  const {
    theme,
    setTheme,
  } = useContext(ThemeContext);

  const toggleTheme = (saveAction?: (theme: Theme) => void) => {
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
    saveAction?.(newTheme);
  };
  return {
    theme: theme || Theme.LIGHT,
    toggleTheme,
  };
}
