import { Route, Routes } from 'react-router-dom';

import NotFoundPage from 'NotFoundPage/404';

import { AllGithubProjectsPage } from './AllProjects/Page';

export function GithubProjectRoutes() {
  return (
    <Routes>
      <Route path="all-github-projects" element={<AllGithubProjectsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
