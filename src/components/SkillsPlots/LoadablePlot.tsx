import { lazy, Suspense } from 'react';

import { ISkillsPlotProps } from './Plot';

const SkillsPlot = lazy(() => import('./Plot'));

export function LazyLoadedSkillsPlot(props: ISkillsPlotProps) {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <SkillsPlot {...props} />
    </Suspense>
  );
}
