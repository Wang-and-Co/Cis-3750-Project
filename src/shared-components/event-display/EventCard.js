/* eslint-disable no-unused-vars */
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import PropTypes from 'prop-types';
import dateFormat from 'dateformat';
import getEventDurationString from '../../utils/getEventDurationString';
import { CheckCircleOutline } from '@mui/icons-material';
import {
  getRegistrationTypeColour,
  getRegistrationTypeMessage,
} from '../../types/types';

const EventCard = ({ id, event = {}, onClick }) => {
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
    : `${location.address} ${location.road}, ${location.city} ${location.province}, ${location.postalCode}`;

  const dateString = `${dateFormat(startDateTime, 'dd/mm/yyyy hh:mm TT')}`;
  const lengthString = getEventDurationString(startDateTime, endDateTime);
  const registrationTypeString = getRegistrationTypeMessage(registrationType);
  const backgroundColour = getRegistrationTypeColour(registrationType);

  const maxDescriptionLength = 70;

  return (
    <Card id={id}>
      <CardActionArea
        onClick={() => {
          onClick(event);
        }}
      >
        <CardMedia
          component="img"
          height="140"
          image={
            imageUri ??
            'https://i0.wp.com/voyagecomics.com/wp-content/uploads/2021/10/smaug_dragon.webp?fit=1782%2C937&ssl=1'
          }
        />
        <CardContent sx={{ backgroundColor: backgroundColour }}>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="subtitle2" color="text.primary">
            {`${dateString}, ${lengthString}`}
          </Typography>
          <Typography variant="subtitle2" color="text.primary">
            {locationString}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description.length > maxDescriptionLength
              ? description.slice(0, maxDescriptionLength) + '...'
              : description}
          </Typography>

          {registrationType != null && registrationType !== 'None' ? (
            <Grid container spacing={0} sx={{ marginTop: 1 }}>
              <Grid item xs={2} sx={{ justifySelf: 'center' }}>
                <CheckCircleOutline
                  sx={{ justifySelf: 'center' }}
                  fontSize={'small'}
                />
              </Grid>
              <Grid item xs={10} sx={{ justifySelf: 'center' }}>
                <Typography
                  sx={{
                    textAlign: 'left',
                    justifySelf: 'baseline',
                    fontSize: 12,
                  }}
                  variant="body2"
                  color="text.primary"
                >
                  {registrationTypeString}
                </Typography>
              </Grid>
            </Grid>
          ) : (
            <></>
          )}
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
  onClick: PropTypes.func,
};
export default EventCard;
