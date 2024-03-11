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
  Typography,
} from '@mui/material';

const Layout = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <AppBar sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Typography>Test</Typography>
      </AppBar>
      <Drawer variant="permanent" anchor="left">
        <List>
          <ListItem key={'test'}>
            <ListItemButton>
              <ListItemIcon>
                <IcecreamOutlined></IcecreamOutlined>
              </ListItemIcon>
              <ListItemText primary="lol"></ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <main>{children}</main>
    </>
  );
};
export default Layout;
