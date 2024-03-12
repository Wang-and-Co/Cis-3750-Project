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
        <Typography>Test</Typography> {/* TODO add a real app bar */}
      </AppBar>
      <Drawer variant="permanent" anchor="left">
        {/* TODO add a real sidebar*/}
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
