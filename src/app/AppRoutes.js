import { Routes, Route } from 'react-router-dom';
import SamplePage from '../screens/SamplePage';
import ErrorPage from '../screens/ErrorPage';
import React from 'react';

const Terms = React.lazy(() => import('./../screens/TermsAndConditions'));
const AppRoutes = () => (
  <Routes>
    <Route path="/" exact element={<SamplePage />} />
    <Route path="/legal/terms-of-service" element={<Terms />} />
    <Route path="*" element={<ErrorPage />} />
  </Routes>
);

export default AppRoutes;
