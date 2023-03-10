import React from 'react';

import { ISkillsPlotProps } from './Plot';

const SkillsPlot = React.lazy(() => import('./Plot'));

export function LazyLoadedSkillsPlot(props: ISkillsPlotProps) {
  return (
    <React.Suspense fallback={<p>Loading...</p>}>
      <SkillsPlot {...props} />
    </React.Suspense>
  );
}
