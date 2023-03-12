import Typography from '@mui/material/Typography';

import { Header } from 'Navigation';

import { AppRoutes } from './Routes';
import { MuiThemeProvider } from '../components/Theme/MuiThemeProvider';

export function AppContent() {
  return (
    <MuiThemeProvider>
      <Header siteTitle="Jaz Singh" />
      <AppRoutes />
      <footer>
        <Typography textAlign="center" sx={{ pt: 2 }}>
          © {new Date().getFullYear()} Jaz Singh
        </Typography>
      </footer>
    </MuiThemeProvider>
  );
}
