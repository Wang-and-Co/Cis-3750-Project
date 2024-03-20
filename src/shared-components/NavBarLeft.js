import { IcecreamOutlined } from '@mui/icons-material';
import {
  List,
  Toolbar,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';

const NavBarLeft = () => {
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
  </div>;
};

export default NavBarLeft;
