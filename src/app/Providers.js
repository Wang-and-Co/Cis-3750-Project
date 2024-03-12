import NiceModal from '@ebay/nice-modal-react';
import { ThemeProvider } from '@mui/material';
import { theme } from './themeUtils';

const Providers = ({ children }) => {
  return (
    <NiceModal.Provider>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </NiceModal.Provider>
  );
};

export default Providers;
