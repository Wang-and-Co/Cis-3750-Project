import { IcecreamOutlined, Inbox, Mail } from '@mui/icons-material';
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

const SidebarRight = ({ widthPercent, children }) => {
  return (
    <Drawer
      variant="permanent"
      anchor="right"
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
      <Box sx={{ overflow: 'auto' }}>{children}</Box>
    </Drawer>
  );
};

SidebarRight.propTypes = {
  widthPercent: PropTypes.number,
};

export default SidebarRight;
