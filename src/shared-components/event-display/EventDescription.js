import {
  Button,
  CardMedia,
  Grid,
  Container,
  Drawer,
  IconButton,
  iconButton,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import React from 'react';
import PropTypes from 'prop-types';
import getEventDurationString from '../../utils/getEventDurationString';
import dateFormat from 'dateformat';
import { CalendarContainer } from 'react-datepicker';
import { CalendarMonth, CurrencyPound, People } from '@mui/icons-material';

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
        <Box style={{ padding: '1rem' }}>
          <Typography
            variant="subtitle1"
            fontSize={18}
            lineHeight={1.2}
            color="text.primary"
            maxHeight={'20%'}
            marginBottom={1}
          >
            {title}
          </Typography>
          <List dense={true} sx={{ width: '100%', paddingLeft: 0 }}>
            <ListItem>
              <ListItemIcon>
                <CalendarMonth />
              </ListItemIcon>
              <ListItemText
                primary={`${dateString}, ${lengthString}`}
              ></ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CalendarMonth />
              </ListItemIcon>
              <ListItemText
                primary={`${locationString}`}
                secondary={
                  location?.extraInstructions &&
                  `Extra Directions: ${location.extraInstructions}`
                }
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CalendarMonth />
              </ListItemIcon>
              <ListItemText
                primary={`Event Type: ${wellnessType}`}
              ></ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CurrencyPound />
              </ListItemIcon>
              <ListItemText primary={`$${cost}`}></ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <People />
              </ListItemIcon>
              <ListItemText
                primary={`Attendees: ${attendees.current} / ${attendees.max}`}
              ></ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <People />
              </ListItemIcon>
              <ListItemText
                primary={`Volunteers: ${volunteers.current} / ${volunteers.max}`}
              ></ListItemText>
            </ListItem>
          </List>

          <Typography
            variant="body2"
            sx={{ marginTop: '16px', marginBottom: '100px' }}
          >
            {description}
          </Typography>
        </Box>
        <Container style={{ position: 'relative', padding: 0 }}>
          <Grid container position="fixed" bottom={0} spacing={1}>
            {registrationType === 'None' ? (
              <>
                <Grid item xs={3}>
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
                      : 'Register as Attendee'}
                  </Button>
                </Grid>
                <Grid item xs={3}>
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
              </>
            ) : (
              <Grid item xs={12}>
                {registrationType === 'Host' ? (
                  <Button sx={{ width: '100%' }} variant="contained">
                    Cancel Event
                  </Button>
                ) : (
                  <Button sx={{ width: '100%' }} variant="contained">
                    Cancel Registration
                  </Button>
                )}
              </Grid>
            )}
          </Grid>
        </Container>
      </Container>
    </>
  );
};

export default EventDescription;
