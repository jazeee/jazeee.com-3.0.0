import { Route, Routes } from 'react-router-dom';

import NotFoundPage from 'NotFoundPage/404';

import { Engineering2019To2023Post } from './ColorHealth2019/Engineering2019-2023';
import { PostsPage } from './Posts';
import { ReactPostsRoutes } from './React/Routes';
import { ZeroFlakyTestsRoutes } from './ZeroFlakyTests/Routes';

export function PostsRoutes() {
  return (
    <Routes>
      <Route path="" element={<PostsPage />} />
      <Route path="engineering-2019-2023" element={<Engineering2019To2023Post />} />
      <Route path="zero-flaky-tests/*" element={<ZeroFlakyTestsRoutes />} />
      <Route path="react/*" element={<ReactPostsRoutes />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
