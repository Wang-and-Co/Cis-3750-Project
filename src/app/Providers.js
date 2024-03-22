import NiceModal from '@ebay/nice-modal-react';
import { ThemeProvider } from '@mui/material';
import { theme } from './themeUtils';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';

const Providers = ({ children }) => {
  return (
    <>
      <CookiesProvider defaultSetOptions={{ path: '/' }}>
        <NiceModal.Provider>
          <BrowserRouter>
            <Toaster position="bottom-center" reverseOrder />
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
          </BrowserRouter>
        </NiceModal.Provider>
      </CookiesProvider>
    </>
  );
};

export default Providers;
