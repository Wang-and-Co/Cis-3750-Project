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

const MinimizedEventCard = ({ id, event, onClick }) => {
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

  const dateString = `${dateFormat(startDateTime, 'dd/mm/yyyy hh:mm TT')}`;
  return (
    <Card>
      <CardActionArea onClick={onClick}>
        <CardContent>
          <Typography
            sx={{ lineHeight: 'normal' }}
            variant="subtitle1"
            component="div"
          >
            {title}
          </Typography>
          <Typography
            sx={{ marginTop: 1 }}
            variant="body2"
            color="text.secondary"
          >
            {`${dateString}`}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

MinimizedEventCard.propTypes = {
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
export default MinimizedEventCard;
