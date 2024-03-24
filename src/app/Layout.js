import { Box, Toolbar } from '@mui/material';
import NavBarLeft from '../shared-components/Navigation/NavBarLeft';
import NavBarTop from '../shared-components/Navigation/NavBarTop';

const NAVBAR_LEFT_WIDTH_PERCENT = 15;
const Layout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <NavBarTop />
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
  );
};

export default Layout;
