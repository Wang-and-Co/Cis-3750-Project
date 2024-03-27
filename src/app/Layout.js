import { Box, Toolbar } from '@mui/material';
import NavBarLeft from '../shared-components/Navigation/NavBarLeft';
import NavBarTop from '../shared-components/Navigation/NavBarTop';
import Footer from '../shared-components/Navigation/Footer';

const NAVBAR_LEFT_WIDTH_PERCENT = 12;
const Layout = ({ children }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
      color="backgroundColor"
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
            marginBottom: 5,
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
export { NAVBAR_LEFT_WIDTH_PERCENT };
