import {
  IcecreamOutlined,
  IcecreamRounded,
  Inbox,
  Mail,
} from '@mui/icons-material';
import {
  List,
  Toolbar,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Drawer,
} from '@mui/material';
import { Box } from '@mui/system';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const NavBarLeft = ({ widthPercent }) => {
  const navigate = useNavigate();
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: `${widthPercent}%`,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: `${widthPercent}%`,
          boxSizing: 'border-box',
        },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: 'auto' }}>
        <List>
          <ListItem key={'Home Page'} disablePadding>
            <ListItemButton onClick={() => navigate('/')}>
              <ListItemIcon>
                <Mail />
              </ListItemIcon>
              <ListItemText primary={'Home Page'} />
            </ListItemButton>
          </ListItem>
          <ListItem key={'Create Event'} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <IcecreamOutlined />
              </ListItemIcon>
              <ListItemText primary={'Create Event'} />
            </ListItemButton>
          </ListItem>
          <ListItem key={'Sample Page'} disablePadding>
            <ListItemButton onClick={() => navigate('/debug')}>
              <ListItemIcon>
                <Mail />
              </ListItemIcon>
              <ListItemText primary={'Sample Page'} />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

NavBarLeft.propTypes = {
  widthPercent: PropTypes.number,
};
export default NavBarLeft;
