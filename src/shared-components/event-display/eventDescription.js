import {Button, CardMedia, Grid, Drawer, IconButton, iconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import React from 'react';
import PropTypes from 'prop-types';
import getEventDurationString from '../../utils/getEventDurationString';
import dateFormat from 'dateformat';

const EventDescription = ({ open, setOpen, event }) => {

  const {
    title,
    description,
    startDateTime,
    endDateTime,
    location,
    isOnline,
    attendees,
    volunteers,
    wellnessType,
    cost,
    imageUri,
  } = event;

  const locationString = isOnline
    ? 'Online'
    : `${location.address} ${location.road}, ${location.city} ${location.province}, ${location.postalCode}`;

  const dateString = `${dateFormat(startDateTime, 'dd/mm/yyyy hh:mm TT')}`;
  const lengthString = getEventDurationString(startDateTime, endDateTime);

  const styling = {
    myEventsWidth: 480,
    topBarHeight: '64px',
    myEventsHeight: window.innerHeight - self.topBarHeight,
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  
  const onClick = () => {
    alert('Lol haha cringe you are! What a 100Z3R');
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
        <div>
          <div style={{ position: 'relative'}}>
            <IconButton
              onClick={handleDrawerClose}
              style={{ position: 'absolute', top: '8px', right: '8px', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
            >
              <CloseIcon />
            </IconButton>
            <CardMedia
              component="img"
              height="200"
              image={
                imageUri ??
                'https://i0.wp.com/voyagecomics.com/wp-content/uploads/2021/10/smaug_dragon.webp?fit=1782%2C937&ssl=1'
              }
              style={{ width: '100%' }}
            />
          </div>
          <div style={{padding: '1rem'}}>
            <Typography gutterBottom variant="h3" component="div" >
              {title}
            </Typography>
            <Typography variant="subtitle1" color="text.primary">
              {`${dateString}, ${lengthString}`}
            </Typography>
            <Typography variant="subtitle1" color="text.primary">
              {locationString}
            </Typography>
            {location?.extraInstructions && (
              <Typography
                variant="subtitle1"
                color="text.primary"
              >
                {`Extra Directions: ${location.extraInstructions}`}
              </Typography>
            )}
            <Typography variant="body1" color="text.primary" sx={{ marginTop: '16px' }}>
              Event type: {wellnessType}
            </Typography>
            <Typography variant="body1" color="text.primary">
              Cost to attend: ${cost}
            </Typography>
            <Typography variant="body1" color="text.primary">
              Attendees: {attendees.current} / {attendees.max}
            </Typography>
            <Typography variant="body1" color="text.primary">
              Volunteers: {volunteers.current} / {volunteers.max}
            </Typography>

            <Typography variant="body1" color="text.primary" sx={{ marginTop: '16px', marginBottom: '200px' }}>
              {description}
            </Typography>
          </div>
        </div>
        <div style={{ 
          position: 'fixed', 
          marginTop: '750px',
          textAlign: 'center',
          width: `${styling.myEventsWidth - 40}px`,
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '20px',
          padding: '20px',
          backgroundColor: 'white',
          }}>
          <Button
            variant="contained"
            color="primary"
            onClick={onClick}
            disabled={attendees.current === attendees.max} // Disable button if current attendees reach max
          >
            {attendees.current === attendees.max ? 'Full (Max reached)' : 'Register as Attendee'}
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={onClick}
            disabled={volunteers.current === volunteers.max} // Disable button if current volunteers reach max
          >
            {volunteers.current === volunteers.max ? 'Full (Max reached)' : 'Register as Volunteer'}
          </Button>
        </div>
      </Drawer>
    </div>
  );
};

EventDescription.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  event: PropTypes.exact({
    title: PropTypes.string,
    description: PropTypes.string,
    startDateTime: PropTypes.Date,
    endDateTime: PropTypes.Date,
    location: {
      address: PropTypes.number,
      road: PropTypes.string,
      city: PropTypes.string,
      province: PropTypes.string,
      postalCode: PropTypes.string,
      extraInstructions: PropTypes.string,
    },
    isOnline: PropTypes.bool,
    attendees: PropTypes.exact({
      current: PropTypes.number,
      max: PropTypes.number,
    }),
    volunteers: PropTypes.exact({
      current: PropTypes.number,
      max: PropTypes.number,
    }),
    wellnessType: PropTypes.string,
    cost: PropTypes.number,
    imageUri: PropTypes.string,
  }),
};

export default EventDescription;
