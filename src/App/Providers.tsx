import { ReactNode } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';

import { MuiThemeProvider } from 'src/components/Theme/MuiThemeProvider';
import { PaletteModeContext } from 'src/components/Theme/paletteModeContext';

interface AppProvidersProps {
  children: ReactNode;
}

export function AppProviders(props: AppProvidersProps) {
  const { children } = props;
  return (
    <HelmetProvider>
      <BrowserRouter>
        <PaletteModeContext>
          <MuiThemeProvider>{children}</MuiThemeProvider>
        </PaletteModeContext>
      </BrowserRouter>
    </HelmetProvider>
  );
}
