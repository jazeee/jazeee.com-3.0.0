import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider, type Theme } from '@mui/material/styles';
import { ReactNode, useMemo } from 'react';

import { usePaletteModeContext } from './paletteModeContext';

// Also check `index.html`
// export const PRIMARY_COLOR = '#2F2001';
const PRIMARY_COLOR = '#512f01';
const SECONDARY_COLORS = {
  light: '#0086e6',
  dark: '#00d0ff',
};
const TYPOGRAPHY_HEADLINE_COLORS = {
  light: '#0086e6',
  dark: '#8ccbd9',
};
const BRIGHTEST_GRAY = '#f0f0f0';
const BACKGROUND_GRAY = '#e0e0e0';
const DARKEST_GRAY = '#000';
const BACKGROUND_BLUE = '#0a1929';
export const DARKEST_BLUE = '#07101d';

type TPaletteMode = Theme['palette']['mode'];

function getTheme(paletteMode: TPaletteMode) {
  const modeIsLight = paletteMode === 'light';
  const theme = createTheme({
    typography: {
      allVariants: {
        color: modeIsLight ? PRIMARY_COLOR : BRIGHTEST_GRAY,
      },
      h1: {
        fontSize: '2rem',
        fontWeight: 'bold',
        color: TYPOGRAPHY_HEADLINE_COLORS[paletteMode],
      },
      h2: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: TYPOGRAPHY_HEADLINE_COLORS[paletteMode],
      },
      h3: {
        fontSize: '1.25rem',
        color: TYPOGRAPHY_HEADLINE_COLORS[paletteMode],
      },
      h4: {
        fontSize: '1rem',
        color: TYPOGRAPHY_HEADLINE_COLORS[paletteMode],
      },
      body1: {
        fontSize: '1rem',
      },
      body2: {
        fontSize: '0.875rem',
      },
    },
    palette: {
      // Setting paletteMode adds color and background overrides that aren't always as expected.
      // mode: paletteMode,
      primary: {
        main: PRIMARY_COLOR,
      },
      secondary: {
        main: SECONDARY_COLORS[paletteMode],
      },
      error: {
        main: '#f00',
      },
      background: {
        default: modeIsLight ? BACKGROUND_GRAY : BACKGROUND_BLUE,
        paper: modeIsLight ? BRIGHTEST_GRAY : PRIMARY_COLOR,
      },
      text: {
        primary: modeIsLight ? DARKEST_GRAY : BRIGHTEST_GRAY,
        secondary: modeIsLight ? DARKEST_GRAY : BRIGHTEST_GRAY,
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
          outlined: {
            color: modeIsLight ? PRIMARY_COLOR : BRIGHTEST_GRAY,
            backgroundColor: modeIsLight ? 'transparent' : '#ffffff10',
          },
          text: {
            color: modeIsLight ? PRIMARY_COLOR : BRIGHTEST_GRAY,
          },
        },
      },
      MuiContainer: {
        styleOverrides: {
          root: {
            backgroundColor: modeIsLight ? BRIGHTEST_GRAY : DARKEST_BLUE,
            paddingTop: '16px',
            paddingBottom: '16px',
          },
        },
      },
      MuiLink: {
        defaultProps: {
          underline: 'hover',
        },
        styleOverrides: {
          root: {
            color: modeIsLight ? '#0068b3' : '#00d0ff',
          },
        },
      },
      MuiDivider: {
        styleOverrides: {
          root: {
            backgroundColor: TYPOGRAPHY_HEADLINE_COLORS[paletteMode],
            borderColor: 'rgba(255, 255, 255, 0)',
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          root: {
            '& a': {
              textDecoration: 'underline',
            },
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
