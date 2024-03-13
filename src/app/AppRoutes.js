import { Routes, Route } from 'react-router-dom';
import SamplePage from '../screens/SamplePage';
import ErrorPage from '../screens/ErrorPage';

const AppRoutes = () => (
  <Routes>
    <Route path="/" exact element={<SamplePage />} />
    <Route path="*" element={<ErrorPage />} />
  </Routes>
);

export default AppRoutes;
