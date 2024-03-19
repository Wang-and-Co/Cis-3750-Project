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

const EventCard = ({ id, event, onClick }) => {
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

  const maxDescriptionLength = 70;

  return (
    <Card>
      <CardActionArea onClick={onClick}>
        <CardMedia
          component="img"
          height="140"
          image={
            imageUri ??
            'https://i0.wp.com/voyagecomics.com/wp-content/uploads/2021/10/smaug_dragon.webp?fit=1782%2C937&ssl=1'
          }
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="subtitle2" color="text.primary">
            {`${dateString}, ${lengthString}`}
          </Typography>
          <Typography variant="subtitle2" color="text.primary">
            {locationString}
          </Typography>
          {location?.extraInstructions && (
            <Typography
              sx={{
                marginTop: 0,
                paddingTop: 0,
                fontSize: 12,
                fontStyle: 'italic',
              }}
              color="text.primary"
            >
              {`Extra Directions: ${location.extraInstructions}`}
            </Typography>
          )}
          <Typography variant="body2" color="text.secondary">
            {description.length > maxDescriptionLength
              ? description.slice(0, maxDescriptionLength) + '...'
              : description}
          </Typography>
          <Typography variant="body2" color="text.primary">
            Cost to attend: ${cost}
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Typography variant="body2" color="text.primary">
                Attendees: {attendees.current} / {attendees.max}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2" color="text.primary">
                Volunteers: {volunteers.current} / {volunteers.max}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

EventCard.propTypes = {
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
  onClick: PropTypes.func,
};
export default EventCard;
