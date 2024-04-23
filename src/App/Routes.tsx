import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { PageLoadingIndicator } from './PageLoadingIndicator';

const HomePage = lazy(() => import('src/Home'));
const SkillsPlotsPage = lazy(() => import('src/SkillsPlots'));
const PresentationsPage = lazy(() => import('src/Presentations'));
const PublicationsPage = lazy(() => import('src/Publications'));
const GithubProjectRoutes = lazy(() => import('src/GithubProjects'));
const PostsRoutes = lazy(() => import('src/Posts'));
const NotFoundPage = lazy(() => import('src/NotFoundPage/404'));

export function AppRoutes() {
  return (
    <Suspense fallback={<PageLoadingIndicator />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Also - update sitemap.txt */}
        <Route path="/skills-plots" element={<SkillsPlotsPage />} />
        <Route path="/presentations" element={<PresentationsPage />} />
        <Route path="/publications" element={<PublicationsPage />} />
        <Route path="/software-projects/*" element={<GithubProjectRoutes />} />
        <Route path="/loading-indicator" element={<PageLoadingIndicator />} />
        <Route path="/posts/*" element={<PostsRoutes />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}
