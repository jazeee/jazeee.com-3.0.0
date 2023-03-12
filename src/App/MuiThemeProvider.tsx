import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';

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
      default: '#fff',
    },
  },
});

export function MuiThemeProvider(props: React.PropsWithChildren) {
  const { children } = props;

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  );
}
