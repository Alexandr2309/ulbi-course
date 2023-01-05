import { Story } from '@storybook/react';
// eslint-disable-next-line personal-fsd-ako-plugin/layer-imports
import { ThemeContextProvider } from '@/app/providers/themeProvider';
import { Theme } from '@/shared/const/theme';

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
