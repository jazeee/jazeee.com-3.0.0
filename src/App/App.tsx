import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';

import { PaletteModeContext } from 'components/Theme/paletteModeContext';

import { AppContent } from './AppContent';

export function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <PaletteModeContext>
          <AppContent />
        </PaletteModeContext>
      </BrowserRouter>
    </HelmetProvider>
  );
}
