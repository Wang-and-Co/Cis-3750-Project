import { IcecreamOutlined } from '@mui/icons-material';
import {
  AppBar,
  CssBaseline,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material';

const Layout = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <AppBar sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <IcecreamOutlined />
          <Typography variant='h4'>Test search bar</Typography> 
          {/* TODO add a real app bar */}
        </Toolbar>
      </AppBar>
      
      <Drawer variant="permanent" anchor="left">
        {/* TODO add a real sidebar*/}
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
      </Drawer>

      <Drawer variant="permanent" anchor="right">
          <Typography variant='h2'>Test My Events</Typography>
          <Typography variant='h2'>text covered ^</Typography>
          {/* TODO add a real My Events section*/}
      </Drawer>
      <main>{children}</main>
    </>
  );
};
export default Layout;
