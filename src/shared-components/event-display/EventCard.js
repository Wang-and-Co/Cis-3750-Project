/* eslint-disable no-unused-vars */
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import PropTypes from 'prop-types';
import dateFormat from 'dateformat';
import getEventDurationString from '../../utils/getEventDurationString';
import { CheckCircleOutline, TaskAlt } from '@mui/icons-material';
import { getRegistrationTypeMessage } from '../../types/types';

const EventCard = ({ id, event = {}, openEventFunc, height }) => {
  const {
    eventID,
    organizerID,
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
    registrationType,
  } = event;
  const locationString = isOnline
    ? 'Online'
    : `${location.address}, ${location.city}`;
  const dateString = `${dateFormat(startDateTime, 'DDD, mmm dd, hh:mm TT')}`;
  const lengthString = getEventDurationString(startDateTime, endDateTime);
  const registrationTypeString = getRegistrationTypeMessage(registrationType);
  const maxDescriptionLength = 70;

  return (
    <Card
      id={id}
      sx={{
        height: height,
        maxHeight: height,
        border: '1px solid lightgray',
        boxShadow: 3,
      }}
    >
      <CardActionArea
        onClick={() => {
          openEventFunc(event);
        }}
        sx={{
          height: '100%',
        }}
      >
        <CardMedia
          component="img"
          height="30%"
          image={
            imageUri ??
            'https://i0.wp.com/voyagecomics.com/wp-content/uploads/2021/10/smaug_dragon.webp?fit=1782%2C937&ssl=1'
          }
        />
        <CardContent
          sx={{
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            margin: 0,
            paddingLeft: 0,
          }}
        >
          <Box
            sx={{
              width: '100%',
              margin: 0,
              paddingRight: 0,
              paddingLeft: 1,
            }}
          >
            <Typography
              variant="subtitle1"
              fontSize={18}
              lineHeight={1.2}
              color="text.primary"
              maxHeight={'50%'}
              sx={{
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitLineClamp: '2',
                WebkitBoxOrient: 'vertical',
              }}
              marginBottom={1}
            >
              {title}
            </Typography>
            <Typography variant="body2" color="text.primary">
              {`${dateString} (${lengthString})`}
            </Typography>
            <Typography variant="body2" color="text.primary">
              {locationString}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description.length > maxDescriptionLength
                ? description.slice(0, maxDescriptionLength) + '...'
                : description}
            </Typography>
          </Box>

          <Box
            sx={{
              position: 'absolute',
              bottom: '0',
              width: '100%',
              margin: 0,
              marginBottom: 1,
              padding: 0,
            }}
          >
            <Grid
              container
              spacing={1}
              sx={{
                marginTop: 1,
                flex: 0,
                paddingLeft: 1,
                paddingRight: 1,
              }}
            >
              <Grid item xs={6}>
                <Stack>
                  <Typography variant="body2" fontSize={12}>
                    Attendees: {attendees.current} / {attendees.max}
                  </Typography>
                  <Typography variant="body2" fontSize={12}>
                    Volunteers: {volunteers.current} / {volunteers.max}
                  </Typography>
                </Stack>
              </Grid>
              {registrationTypeString && (
                <Grid item xs={6}>
                  <Chip
                    variant="filled"
                    color={`${registrationType}`}
                    label={registrationTypeString}
                    icon={<TaskAlt />}
                    sx={{ width: '100%' }}
                  ></Chip>
                </Grid>
              )}
            </Grid>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

EventCard.propTypes = {
  event: PropTypes.exact({
    eventID: PropTypes.number,
    organizerID: PropTypes.number,
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
    registrationType: PropTypes.string,
  }),
  openEventFunc: PropTypes.func,
};
export default EventCard;
