import { QueryClient } from '@tanstack/query-core';
import { QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import store from '../store/store';
import router from './routes';
import { LanguageProvider } from '../provider/language-provider/LanguageProvider.component';
import Layout from './Layout.component';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './app.theme';

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <Provider store={store}>
          <Layout>
            <RouterProvider router={router} />
          </Layout>
        </Provider>
      </LanguageProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
