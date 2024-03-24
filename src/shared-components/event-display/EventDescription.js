import {
  Button,
  CardMedia,
  Grid,
  Container,
  Drawer,
  IconButton,
  iconButton,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import React from 'react';
import PropTypes from 'prop-types';
import getEventDurationString from '../../utils/getEventDurationString';
import dateFormat from 'dateformat';

const EventDescription = ({ closeFunc, event = {} }) => {
  const {
    eventID,
    organizerID,
    title,
    description,
    startDateTime,
    endDateTime,
    location = {},
    isOnline,
    attendees = {},
    volunteers = {},
    wellnessType,
    cost,
    imageUri,
    registrationType,
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
    closeFunc();
  };

  return (
    <>
      <Container style={{ padding: 0 }}>
        <Container style={{ position: 'relative', padding: 0 }}>
          <IconButton
            onClick={handleDrawerClose}
            style={{
              position: 'absolute',
              top: '8px',
              right: '8px',
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
            }}
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
        </Container>
        <Container style={{ padding: '1rem' }}>
          <Typography gutterBottom variant="h3" component="div">
            {title}
          </Typography>
          <Typography variant="subtitle1" color="text.primary">
            {`${dateString}, ${lengthString}`}
          </Typography>
          <Typography variant="subtitle1" color="text.primary">
            {locationString}
          </Typography>
          {location?.extraInstructions && (
            <Typography variant="subtitle1" color="text.primary">
              {`Extra Directions: ${location.extraInstructions}`}
            </Typography>
          )}
          <Typography
            variant="body1"
            color="text.primary"
            sx={{ marginTop: '16px' }}
          >
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

          <Typography
            variant="body1"
            color="text.primary"
            sx={{ marginTop: '16px', marginBottom: '100px'}}
          >
            {description}
          </Typography>
        </Container>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          position="fixed"
          bottom={0}
          width={`${styling.myEventsWidth - 20}px`}
          sx={{
            textAlign: 'center',
            padding: '10px',
            backgroundColor: 'white',
          }}
        >
          <Grid item sx={{ paddingLeft: '13px' }}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                console.log('Asked to register as attendee');
              }}
              sx={{ width: '206px' }}
              disabled={attendees.current === attendees.max} // Disable button if current attendees reach max
            >
              {attendees.current === attendees.max
                ? 'Full (Max reached)'
                : 'Register as Volunteer'}
            </Button>
          </Grid>
          <Grid item sx={{ paddingLeft: '13px' }}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                console.log('Asked to register as volunteer');
              }}
              sx={{ width: '206px' }}
              disabled={volunteers.current === volunteers.max} // Disable button if current volunteers reach max
            >
              {volunteers.current === volunteers.max
                ? 'Full (Max reached)'
                : 'Register as Volunteer'}
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default EventDescription;
