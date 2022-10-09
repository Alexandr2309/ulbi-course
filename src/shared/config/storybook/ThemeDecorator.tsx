import { Story } from '@storybook/react';
import { Theme, ThemeContextProvider } from 'app/providers/themeProvider';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => {
  document.body.className = theme;
  
  return (
    <ThemeContextProvider initialTheme={theme}>
      <div className="App">
        <StoryComponent />
      </div>
    </ThemeContextProvider>
  );
};
