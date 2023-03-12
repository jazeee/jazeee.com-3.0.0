import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const HomePage = lazy(() => import('Home'));
const SkillsPlotsPage = lazy(() => import('SkillsPlots'));
const PresentationsPage = lazy(() => import('Presentations'));
const PublicationsPage = lazy(() => import('Publications'));
const GithubProjectRoutes = lazy(() => import('GithubProjects'));
const NotFoundPage = lazy(() => import('NotFoundPage/404'));

export function AppRoutes() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/skills-plots" element={<SkillsPlotsPage />} />
        <Route path="/presentations" element={<PresentationsPage />} />
        <Route path="/publications" element={<PublicationsPage />} />
        <Route path="/software-projects/*" element={<GithubProjectRoutes />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}
