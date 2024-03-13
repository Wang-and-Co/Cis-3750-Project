import { Routes, Route } from 'react-router-dom';
import SamplePage from '../screens/SamplePage';
import ErrorPage from '../screens/ErrorPage';
import LoserPage from '../screens/LoserPage';

const AppRoutes = () => (
  <Routes>
    <Route path="/" exact element={<SamplePage />} />
    <Route path="/lol-loser" exact element={<LoserPage />} />
    <Route path="*" element={<ErrorPage />} />
  </Routes>
);

export default AppRoutes;
