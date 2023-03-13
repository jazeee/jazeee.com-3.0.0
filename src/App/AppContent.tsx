import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { Header } from 'Navigation';

import { AppRoutes } from './Routes';
import { MuiThemeProvider } from '../components/Theme/MuiThemeProvider';

export function AppContent() {
  return (
    <MuiThemeProvider>
      <Box display="flex" flexDirection="column" minHeight="100vh">
        <Header siteTitle="Jaz Singh" />
        <Box component="main" flexGrow={1}>
          <AppRoutes />
        </Box>
        <Box component="footer" sx={{ paddingTop: 2, paddingBottom: 1 }}>
          <Typography textAlign="center">© {new Date().getFullYear()} Jaz Singh</Typography>
        </Box>
      </Box>
    </MuiThemeProvider>
  );
}
