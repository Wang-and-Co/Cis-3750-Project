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
  Chip,
  Stack,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import React from 'react';
import PropTypes from 'prop-types';
import getEventDurationString from '../../utils/getEventDurationString';
import dateFormat from 'dateformat';
import { CalendarContainer } from 'react-datepicker';
import {
  CalendarMonth,
  CheckBox,
  CurrencyPound,
  Interests,
  Paid,
  People,
  Place,
  TaskAlt,
} from '@mui/icons-material';
import { getRegistrationTypeMessage } from '../../types/types';
import useAsyncResponse from '../axios/useAsyncResponse';
import { addBooking, deleteEvent } from '../../app/api/events';
import toast from 'react-hot-toast';

const EventDescription = ({ closeFunc, event = {}, triggerRefresh }) => {
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

  const dateString = `${dateFormat(startDateTime, 'DDD, mmm dd, hh:mm TT')}`;
  const lengthString = getEventDurationString(startDateTime, endDateTime);
  const registrationTypeString = getRegistrationTypeMessage(registrationType);

  const { isLoading, callAsyncFunction, callAsyncFunctionPromise } =
    useAsyncResponse(
      addBooking,
      (response) => {
        toast('Successfully registered!');
        triggerRefresh();
      },
      (err) => {
        toast(
          'There was an issue completing your registration. Please try again.',
        );
      },
    );

    const { isLoadingDelEvent, deleteEventAsyncFunction, deleteEventAsyncFunctionPromise } = 
      useAsyncResponse(
        deleteEvent,
        (response) => {
          toast('Event successfully deleted!');
          triggerRefresh();
        },
        (err) => {
          toast(
            'There was an issue deleting this event. Please try again.',
          );
        },
      );

  const handleDrawerClose = () => {
    closeFunc();
  };

  return (
    <>
      <Stack style={{ padding: 0, width: '100%' }}>
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
        <Box sx={{ padding: 1, paddingRight: 2, paddingLeft: 2 }}>
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
          <List dense={true} sx={{ width: '100%', padding: 0 }}>
            <ListItem sx={{ paddingLeft: 0, margin: 0 }}>
              <ListItemIcon sx={{ minWidth: 0, paddingRight: 1 }}>
                <CalendarMonth />
              </ListItemIcon>
              <ListItemText
                primary={`${dateString}, ${lengthString}`}
              ></ListItemText>
            </ListItem>
            <ListItem sx={{ paddingLeft: 0, margin: 0 }}>
              <ListItemIcon sx={{ minWidth: 0, paddingRight: 1 }}>
                <Place />
              </ListItemIcon>
              <ListItemText
                primary={`${locationString}`}
                secondary={
                  location?.extraInstructions &&
                  `Extra Directions: ${location.extraInstructions}`
                }
              />
            </ListItem>
            <ListItem sx={{ paddingLeft: 0, margin: 0 }}>
              <ListItemIcon sx={{ minWidth: 0, paddingRight: 1 }}>
                <Interests />
              </ListItemIcon>
              <ListItemText
                primary={`Event Type: ${wellnessType}`}
              ></ListItemText>
            </ListItem>
            <ListItem sx={{ paddingLeft: 0, margin: 0 }}>
              <ListItemIcon sx={{ minWidth: 0, paddingRight: 1 }}>
                <Paid />
              </ListItemIcon>
              <ListItemText primary={`$${cost}`}></ListItemText>
            </ListItem>
            <ListItem sx={{ paddingLeft: 0, margin: 0 }}>
              <ListItemIcon sx={{ minWidth: 0, paddingRight: 1 }}>
                <People />
              </ListItemIcon>
              <ListItemText
                primary={`Attendees: ${attendees.current} / ${attendees.max}`}
              ></ListItemText>
            </ListItem>
            <ListItem sx={{ paddingLeft: 0, margin: 0 }}>
              <ListItemIcon sx={{ minWidth: 0, paddingRight: 1 }}>
                <People />
              </ListItemIcon>
              <ListItemText
                primary={`Volunteers: ${volunteers.current} / ${volunteers.max}`}
              ></ListItemText>
            </ListItem>
          </List>

          <Typography variant="body2" sx={{ marginBottom: 5 }}>
            {description}
          </Typography>

          {registrationType != null && registrationType !== 'none' ? (
            <Chip
              variant="filled"
              color={`${registrationType}`}
              label={registrationTypeString}
              icon={<TaskAlt />}
              sx={{ width: '100%' }}
            ></Chip>
          ) : (
            <></>
          )}

          <Grid container spacing={1} sx={{ marginTop: 1 }}>
            {registrationType === 'none' ? (
              <>
                <Grid item xs={12} lg={6} key="attend">
                  <Button
                    variant="contained"
                    color="attendee"
                    onClick={() => {
                      callAsyncFunction({
                        event_id: eventID,
                        type: 'Attendee',
                      });
                    }}
                    sx={{
                      width: '100%',
                      height: '100%',
                    }}
                    disabled={attendees.current === attendees.max} // Disable button if current attendees reach max
                  >
                    {attendees.current === attendees.max
                      ? 'Attend Event (FULL)'
                      : 'Attend Event'}
                  </Button>
                </Grid>
                <Grid item xs={12} lg={6} key="volunteer">
                  <Button
                    variant="contained"
                    color="volunteer"
                    onClick={() => {
                      callAsyncFunction({
                        event_id: eventID,
                        type: 'Volunteer',
                      });
                    }}
                    sx={{
                      width: '100%',
                      height: '100%',
                    }}
                    disabled={volunteers.current === volunteers.max} // Disable button if current volunteers reach max
                  >
                    {volunteers.current === volunteers.max
                      ? 'Volunteer Here (FULL)'
                      : 'Volunteer Here'}
                  </Button>
                </Grid>
              </>
            ) : (
              <Grid item xs={12} key="cancel">
                {registrationType === 'Host' ? (
                  <Button
                    sx={{ width: '100%' }}
                    variant="contained"
                    color="error"
                    onClick={() => {
                      callAsyncFunction({
                        event_id: eventID
                      })
                    }}
                  >
                    Cancel Event
                  </Button>
                ) : (
                  <Button
                    sx={{ width: '100%' }}
                    variant="contained"
                    color="error"
                  >
                    Cancel Registration
                  </Button>
                )}
              </Grid>
            )}
          </Grid>
        </Box>
      </Stack>
    </>
  );
};

export default EventDescription;
