import { Navigate, Route, Routes } from 'react-router-dom';

import NotFoundPage from 'src/NotFoundPage/404';

import { BoundarySpacingAndComposableComponents } from './BoundaryMargins/Post';
import { ReactStateManagementPost } from './StateManagement/StateManagementPost';

export function ReactPostsRoutes() {
  return (
    <Routes>
      <Route path="" element={<Navigate replace to="state-management" />} />
      <Route path="state-management" element={<ReactStateManagementPost />} />
      <Route path="boundary-spacing" element={<BoundarySpacingAndComposableComponents />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
