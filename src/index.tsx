import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeContextProvider } from 'app/providers/themeProvider';
import App from 'app/App';
import 'app/styles/index.scss';

import 'shared/config/i18n/i18n';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';

render(
  <BrowserRouter>
    <ErrorBoundary>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </ErrorBoundary>
  </BrowserRouter>,
  document.getElementById('root'),
);
