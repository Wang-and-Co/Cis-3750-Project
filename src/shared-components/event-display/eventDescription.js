import {Button, Drawer, Typography } from '@mui/material';
import React from 'react';

const EventDescription = ({ open, setOpen, title, description }) => {
  const myEventsWidth = 480;
  const topBarHeight = '64px';
  const myEventsHeight = window.innerHeight - topBarHeight;

  const handleDrawerClose = () => {
    setOpen(false);
  };
  
  return (
    <div>
      <Drawer
        sx={{
            width: myEventsWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': { 
                width: myEventsWidth, 
                height: myEventsHeight,
                marginTop: topBarHeight, 
            },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <div style={{ padding: '1rem'}}>
          <div style={{ display: 'flex', justifyContent: 'flex-end', paddingRight: '8px' }}>
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