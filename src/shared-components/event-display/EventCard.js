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

const GetEventDurationString = (start, end) => {
  let duration = (end - start) / 1000;

  let hours = duration / 3600;

  return `${hours} hours`;
};
const EventCard = ({ event, onClick }) => {
  const locationString = event.isOnline
    ? 'Online'
    : `${event.location.address} ${event.location.road}, ${event.location.city} ${event.location.province}, ${event.location.postalCode}`;

  const dateString = `${dateFormat(event.startDateTime, 'dd/mm/yyyy hh:mm TT')}`;
  const lengthString = GetEventDurationString(
    event.startDateTime,
    event.endDateTime,
  );

  return (
    <Card>
      <CardActionArea onClick={onClick}>
        <CardMedia
          component="img"
          height="140"
          image={
            event.imageUri != ''
              ? event.imageUri
              : 'https://i0.wp.com/voyagecomics.com/wp-content/uploads/2021/10/smaug_dragon.webp?fit=1782%2C937&ssl=1'
          }
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {event.title}
          </Typography>
          <Typography variant="subtitle2" color="text.primary">
            {`${dateString}, ${lengthString}`}
          </Typography>
          <Typography variant="subtitle2" color="text.primary">
            {locationString}
          </Typography>
          {event.location.extraInstructions &&
          event.location.extraInstructions.length > 0 ? (
            <Typography
              sx={{
                marginTop: 0,
                paddingTop: 0,
                fontSize: 12,
                fontStyle: 'italic',
              }}
              color="text.primary"
            >
              {`Extra Directions: ${event.location.extraInstructions}`}
            </Typography>
          ) : (
            ''
          )}
          <Typography variant="body2" color="text.secondary">
            {event.description}
          </Typography>
          <Typography variant="body2" color="text.primary">
            Cost to attend: ${event.cost}
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Typography variant="body2" color="text.primary">
                Attendees: {event.attendees.current} / {event.attendees.max}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2" color="text.primary">
                Volunteers: {event.volunteers.current} / {event.volunteers.max}
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
