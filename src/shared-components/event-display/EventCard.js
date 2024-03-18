import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import PropTypes from 'prop-types';

const EventCard = ({ event, onClick }) => {
  return (
    <Card>
      <CardActionArea onClick={onClick}>
        <CardMedia
          component="img"
          height="140"
          image="https://i0.wp.com/voyagecomics.com/wp-content/uploads/2021/10/smaug_dragon.webp?fit=1782%2C937&ssl=1"
          alt="green Smaug"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {event.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {event.description}
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={5}>
              <Typography sx={{ mb: 1.5 }} color="text.primary">
                Attendees: {event.attendees.current} / {event.attendees.max}
              </Typography>
            </Grid>
            <Grid item xs={5}>
              <Typography sx={{ mb: 1.5 }} color="text.primary">
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
