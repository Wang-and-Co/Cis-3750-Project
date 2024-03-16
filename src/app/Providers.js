import NiceModal from '@ebay/nice-modal-react';
import { ThemeProvider } from '@mui/material';
import { theme } from './themeUtils';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter } from 'react-router-dom';

const Providers = ({ children }) => {
  return (
    <>
      <NiceModal.Provider>
        <BrowserRouter>
          <Toaster position="bottom-center" reverseOrder />
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </BrowserRouter>
      </NiceModal.Provider>
    </>
  );
};

export default Providers;
