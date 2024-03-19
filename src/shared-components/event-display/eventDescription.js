import { Button, Drawer, Typography } from '@mui/material';
import React from 'react';

const EventDescription = ({ open, setOpen, title, description }) => {
  const styling = {
    myEventsWidth: 480,
    topBarHeight: '64px',
    myEventsHeight: window.innerHeight - self.topBarHeight,
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Drawer
        sx={{
          width: styling.myEventsWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: styling.myEventsWidth,
            height: styling.myEventsHeight,
            marginTop: styling.topBarHeight,
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <div style={{ padding: '1rem' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              paddingRight: '8px',
            }}
          >
            {/*add real icon*/}
            <Button variant="contained" onClick={handleDrawerClose}>
              x
            </Button>
          </div>
          <Typography variant="h2" sx={{ padding: '10px' }}>
            {title}
          </Typography>
          <Typography variant="body1" sx={{ marginLeft: '10px' }}>
            {description}
          </Typography>
        </div>
      </Drawer>
    </div>
  );
};

export default EventDescription;
