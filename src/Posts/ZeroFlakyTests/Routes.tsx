import { Navigate, Route, Routes } from 'react-router-dom';

import NotFoundPage from 'src/NotFoundPage/404';

import { FlakyTestsPost01 } from './PostPart01';
import { FlakyTestsPost02 } from './PostPart02';

export function ZeroFlakyTestsRoutes() {
  return (
    <Routes>
      <Route path="" element={<Navigate replace to="engineering-impact" />} />
      <Route path="engineering-impact" element={<FlakyTestsPost01 />} />
      <Route path="strategies" element={<FlakyTestsPost02 />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
