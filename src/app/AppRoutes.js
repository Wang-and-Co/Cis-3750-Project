import { Routes, Route } from 'react-router-dom';
import ErrorPage from '../screens/ErrorPage';
import React from 'react';
import HomePage from '../screens/HomePage';
import CreateEventPage from '../screens/CreateEventPage';
import SamplePage from '../screens/SamplePage/SamplePage';
import HostingPage from '../screens/HostingPage';

const Terms = React.lazy(() => import('./../screens/TermsAndConditions'));
const AppRoutes = () => (
  <Routes>
    <Route path="/" exact element={<HomePage />} />
    <Route path="/hosting" element={<HostingPage />} />
    <Route path="/hosting/create" element={<CreateEventPage />} />
    <Route path="/debug" element={<SamplePage />} />
    <Route path="/legal/terms-of-service" element={<Terms />} />
    <Route path="*" element={<ErrorPage />} />
  </Routes>
);

export default AppRoutes;
