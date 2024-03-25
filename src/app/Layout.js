import { Box, Toolbar } from '@mui/material';
import NavBarLeft from '../shared-components/Navigation/NavBarLeft';
import NavBarTop from '../shared-components/Navigation/NavBarTop';
import Footer from '../shared-components/Navigation/Footer';

const NAVBAR_LEFT_WIDTH_PERCENT = 15;
const Layout = ({ children }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <NavBarTop />
      <Box
        sx={{
          display: 'flex',
          flexGrow: 1,
        }}
      >
        <NavBarLeft widthPercent={NAVBAR_LEFT_WIDTH_PERCENT} />
        <Box
          sx={{
            width: `${100 - NAVBAR_LEFT_WIDTH_PERCENT}%`,
          }}
        >
          <Toolbar />
          {children}
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
