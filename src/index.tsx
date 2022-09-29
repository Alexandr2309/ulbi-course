import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'app/styles/index.scss';
import { ThemeContextProvider } from 'app/providers/ThemeProvider';
import App from './app/App';

import 'shared/config/i18n/i18n';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';

const root = createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <ThemeContextProvider>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </ThemeContextProvider>
  </BrowserRouter>,
);
