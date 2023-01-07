import { createContext } from 'react';
import { Theme } from '@/shared/const/theme';

export interface ThemeContextProps {
  theme?: Theme;
  setTheme?: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextProps>({});
export default ThemeContext;
