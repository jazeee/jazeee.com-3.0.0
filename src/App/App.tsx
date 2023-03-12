import Typography from '@mui/material/Typography';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';

import { Header } from 'Navigation';

import { MuiThemeProvider } from './MuiThemeProvider';
import { AppRoutes } from './Routes';

export function App() {
  return (
    <HelmetProvider>
      <MuiThemeProvider>
        <BrowserRouter>
          <Header siteTitle="Jaz Singh" />
          <AppRoutes />
          <footer>
            <Typography textAlign="center" sx={{ pt: 2 }}>
              © {new Date().getFullYear()} Jaz Singh
            </Typography>
          </footer>
        </BrowserRouter>
      </MuiThemeProvider>
    </HelmetProvider>
  );
}
