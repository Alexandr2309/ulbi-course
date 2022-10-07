import { Story } from '@storybook/react';
import { Theme, ThemeContextProvider } from 'app/providers/themeProvider';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
  <ThemeContextProvider initialTheme={theme}>
    <div className={`App ${theme}`}>
      <StoryComponent />
    </div>
  </ThemeContextProvider>
);
