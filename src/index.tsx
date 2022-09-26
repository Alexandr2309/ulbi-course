import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from 'app/App';
import { ThemeContextProvider } from 'app/providers/themeProvider';

import 'shared/config/i18n/i18n';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';

render(
  <BrowserRouter>
    <ThemeContextProvider>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </ThemeContextProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
