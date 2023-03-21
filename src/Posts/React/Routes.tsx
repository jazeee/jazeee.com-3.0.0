import { Navigate, Route, Routes } from 'react-router-dom';

import NotFoundPage from 'NotFoundPage/404';

import { ReactStateManagementPost } from './StateManagement/StateManagementPost';

export function ReactPostsRoutes() {
  return (
    <Routes>
      <Route path="" element={<Navigate replace to="state-management" />} />
      <Route path="state-management" element={<ReactStateManagementPost />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
