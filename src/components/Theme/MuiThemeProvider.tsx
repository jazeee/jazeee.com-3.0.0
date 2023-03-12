import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme, Theme } from '@mui/material/styles';
import { ReactNode, useMemo } from 'react';

import { usePaletteModeContext } from './paletteModeContext';
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../../utils/colors';

type TPaletteMode = Theme['palette']['mode'];

function getTheme(paletteMode: TPaletteMode) {
  const theme = createTheme({
    typography: {
      h1: {
        fontSize: '2rem',
        fontWeight: 'bold',
      },
      h2: {
        fontSize: '1.5rem',
      },
      h3: {
        fontSize: '1.25rem',
      },
      h4: {
        fontSize: '1rem',
      },
      body1: {
        fontSize: '1rem',
      },
      body2: {
        fontSize: '0.875rem',
      },
    },
    palette: {
      mode: paletteMode,
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
        default: '#222',
        paper: PRIMARY_COLOR,
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'unset',
            fontWeight: 'bold',
            fontSize: '0.875rem',
            lineHeight: '1.25rem',
          },
        },
      },
    },
  });
  return theme;
}

interface Props {
  children: ReactNode;
}
export function MuiThemeProvider(props: Props) {
  const { children } = props;
  const { paletteMode } = usePaletteModeContext();
  const theme = useMemo(() => getTheme(paletteMode), [paletteMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
