import { BrowserRouter } from 'react-router-dom';
import { ThemeContextProvider } from 'app/providers/themeProvider';
import App from 'app/App';
import 'app/styles/index.scss';

import 'shared/config/i18n/i18n';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { StoreProvider } from 'app/providers/storeProvider';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');

if (!container) {
  throw new Error('Не удалось найти контейнер! Невозможно вмонтировать React приложение!');
}

const root = createRoot(container); // createRoot(container!) if you use TypeScript

root.render(
  <BrowserRouter>
    <StoreProvider>
      <ErrorBoundary>
        <ThemeContextProvider>
          <App />
        </ThemeContextProvider>
      </ErrorBoundary>
    </StoreProvider>
  </BrowserRouter>,
);
