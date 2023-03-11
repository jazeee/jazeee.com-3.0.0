import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import { Header } from './Header';
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../utils/colors';

export const theme = createTheme({
  palette: {
    primary: {
      main: PRIMARY_COLOR,
    },
    secondary: {
      main: SECONDARY_COLOR,
    },
    error: {
      main: '#f00',
    },
    background: {
      default: '#000',
    },
  },
});

export function Layout(props: React.PropsWithChildren) {
  const { children } = props;

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Header siteTitle="Jaz Singh" />
        <main>{children}</main>
        <footer>© {new Date().getFullYear()} Jaz Singh</footer>
      </ThemeProvider>
    </>
  );
}
