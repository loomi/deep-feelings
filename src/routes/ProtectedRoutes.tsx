import { Navigate, Outlet, Route, Routes } from 'react-router-dom';

import { MainLayout } from '@/components/Layout';
import { Landing } from '@/modules/misc';
import { Surveys } from '@/modules/surveys';

const App = () => {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
};

export const ProtectedRoutes = () => {
  return (
    <Routes>
      <Route path="/app" element={<App />}>
        <Route path="/" element={<Surveys />} />
        <Route path="*" element={<Navigate to="/app" />} />
      </Route>
      <Route path="/" element={<Landing />} />
      <Route path="*" element={<Navigate to="/app" />} />
    </Routes>
  );
};
