import { Route, Routes } from 'react-router-dom';

import { AuthRoutes } from '@/modules/auth';
import { Landing } from '@/modules/misc';
import { Surveys } from '@/modules/surveys';

export const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/*" element={<AuthRoutes />} />
      <Route path="/" element={<Landing />} />
      <Route path="/enquetes" element={<Surveys />} />
    </Routes>
  );
};
