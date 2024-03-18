import { IcecreamOutlined } from '@mui/icons-material';
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
} from '@mui/material';

const drawerWidth = 240;
const myEventsWidth = 480;
const topBarHeight = '64px';
const myEventsHeight = window.innerHeight - topBarHeight;

const navBarLeft = (
  <div>
    <Toolbar />
    <List>
      <ListItem key={'test'} sx={{ marginTop: '2rem' }}>
        <ListItemButton>
          <ListItemIcon>
            <IcecreamOutlined></IcecreamOutlined>
          </ListItemIcon>
          <ListItemText primary="lol"></ListItemText>
        </ListItemButton>
      </ListItem>
      <ListItem key={'second'}>
        <ListItemButton>
          <ListItemIcon>
            <IcecreamOutlined></IcecreamOutlined>
          </ListItemIcon>
          <ListItemText primary="lol covered ^"></ListItemText>
        </ListItemButton>
      </ListItem>
    </List>
  </div>
);

const myEventsBar = (
  <div style={{ padding: '1rem'}}>
    <Typography variant='h2'>Test My Events</Typography>
  </div>
);

const Layout = ({ children }) => {

  return (
    <>
      <CssBaseline />

      <Box sx={{ display: 'flex' }}>
        
        {/*right nav bar*/}
        <Drawer
          variant="permanent"
          anchor="right"
          sx={{
            flexShrink: 0,
            '& .MuiDrawer-paper': { 
              width: myEventsWidth, 
              height: myEventsHeight,
              marginTop: topBarHeight, 
            }
          }}
          open
        >
          {myEventsBar}
        </Drawer>

        {/*left nav bar*/}
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': { width: drawerWidth }
          }}
          open
        >
          {navBarLeft}
        </Drawer>
        
        <AppBar
          position='fixed'
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
            zIndex: (theme) => theme.zIndex.drawer + 1,
            height: topBarHeight
          }}
        >
           {/*top nav bar*/}
          <Toolbar>
            <Typography variant='h4'>Test search bar</Typography>
          </Toolbar>
        </AppBar>
      
        {/*body*/}
        <Box component="main" sx={{ flexGrow: 1, marginRight: `${myEventsWidth}px`}}>
          {children}
        </Box>
      </Box>
    </>
  );
};


export default Layout;
