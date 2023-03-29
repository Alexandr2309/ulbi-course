import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import { ReducersMapObject } from '@reduxjs/toolkit';
import i18nForTests from '@/shared/config/i18n/i18nForTests';
import { StateSchema, StoreProvider } from '@/app/providers/storeProvider';
import { Theme } from '@/shared/const/theme';
// eslint-disable-next-line personal-fsd-ako-plugin/layer-imports
import { ThemeContextProvider } from '@/app/providers/themeProvider';
// eslint-disable-next-line personal-fsd-ako-plugin/layer-imports
import '@/app/styles/index.scss';

export interface ComponentRenderOptions{
  route?: string;
  initialState?: DeepPartial<StateSchema>
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
  theme?: Theme
}

interface TestProviderArgs {
  children: ReactNode;
  options?: ComponentRenderOptions
}
export function TestProvider(props: TestProviderArgs) {
  const { children, options = {} } = props;
  const {
    route = '/',
    initialState,
    asyncReducers,
    theme = Theme.LIGHT,
  } = options;
  return (
    <MemoryRouter initialEntries={[route]}>
      <StoreProvider asyncReducers={asyncReducers} initialState={initialState}>
        <I18nextProvider i18n={i18nForTests}>
          <ThemeContextProvider initialTheme={theme}>
            {children}
          </ThemeContextProvider>
        </I18nextProvider>
      </StoreProvider>
    </MemoryRouter>
  );
}
export function componentRender(component: ReactNode, options: ComponentRenderOptions = {}) {
  return render(<TestProvider options={options}>{component}</TestProvider>);
}
