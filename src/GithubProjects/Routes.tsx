import { Route, Routes } from 'react-router-dom';

import NotFoundPage from 'src/NotFoundPage/404';

import { AllGithubProjectsPage } from './AllProjects/Page';
import SoftwareProjectsPage from './FeaturedProjects/Page';

export function GithubProjectRoutes() {
  return (
    <Routes>
      <Route path="" element={<SoftwareProjectsPage />} />
      <Route path="all-github-projects" element={<AllGithubProjectsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
