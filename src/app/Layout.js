import { IcecreamOutlined, Inbox, Mail } from '@mui/icons-material';
import {
  AppBar,
  CssBaseline,
  Drawer,
  Box,
  IconButton,
  MenuIcon,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Container,
  Divider,
} from '@mui/material';
import NavBarLeft from '../shared-components/NavBarLeft';

const drawerWidth = 240;
const myEventsWidth = 480;
const topBarHeight = '64px';
const myEventsHeight = window.innerHeight - topBarHeight;

const Layout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          boxShadow: 'none',
          backgroundColor: 'white',
          borderBottom: 1,
          borderColor: 'lightgray',
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Search bar goes here
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
      >
        <NavBarLeft></NavBarLeft>
      </Drawer>

      <Box sx={{ flexGrow: 1, paddingTop: 3 }}>{children}</Box>
    </Box>
  );
};

export default Layout;
