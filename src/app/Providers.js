import NiceModal from '@ebay/nice-modal-react';
import { ThemeProvider } from '@mui/material';
import { theme } from './themeUtils';
import { Toaster } from 'react-hot-toast';

const Providers = ({ children }) => {
  return (
    <>
      <NiceModal.Provider>
        <Toaster position="bottom-center" reverseOrder />
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </NiceModal.Provider>
    </>
  );
};

export default Providers;
