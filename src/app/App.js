import logo from './../logo.svg';
import './../App.css';

import { showConfirmationModal } from '../shared-components/modals';
import Layout from './Layout';
import Providers from './Providers';
import toast from 'react-hot-toast';
import AppRoutes from './AppRoutes';

// create app functional component that returns a <layout>
const App = () => {
  return (
    <Providers>
      <Layout>
        <AppRoutes />
      </Layout>
    </Providers>
  );
};

export default App;
