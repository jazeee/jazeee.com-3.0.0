import { Navigate, Route, Routes } from 'react-router-dom';

import NotFoundPage from 'src/NotFoundPage/404';

import { ThirdPartyDependenciesPost } from './ThirdPartyDependencies/Post';

export function EngineeringPostsRoutes() {
  return (
    <Routes>
      <Route path="" element={<Navigate replace to="third-party-dependencies" />} />
      <Route path="third-party-dependencies" element={<ThirdPartyDependenciesPost />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
