import { lazy } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { AppProviders } from './Providers';

const AppContent = lazy(async () => import('./AppContent'));

export function App() {
  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <AppProviders>
        <AppContent />
      </AppProviders>
    </ErrorBoundary>
  );
}
