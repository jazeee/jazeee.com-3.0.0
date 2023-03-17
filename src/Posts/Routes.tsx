import { Route, Routes } from 'react-router-dom';

import NotFoundPage from 'NotFoundPage/404';

import { Engineering2019To2023Post } from './ColorHealth2019/Engineering2019-2023';

export function PostsRoutes() {
  return (
    <Routes>
      <Route path="" element={<div />} />
      <Route path="engineering-2019-2023" element={<Engineering2019To2023Post />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
