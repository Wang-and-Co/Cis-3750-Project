import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Typography,
} from '@mui/material';
import PropTypes from 'prop-types';
import dateFormat from 'dateformat';
import getEventDurationString from '../../utils/getEventDurationString';
import { CheckCircleOutline, TaskAlt } from '@mui/icons-material';
import { getRegistrationTypeMessage } from '../../types/types';

const MinimizedEventCard = ({ id, event, openEventFunc }) => {
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

  const dateString = `${dateFormat(startDateTime, 'DDD, mmm dd, hh:mm TT')}`;
  const registrationTypeString = getRegistrationTypeMessage(registrationType);

  return (
    <Card sx={{ border: '1px solid lightgray' }}>
      <CardActionArea
        onClick={() => {
          openEventFunc(event);
        }}
      >
        <CardContent>
          <Typography
            sx={{ lineHeight: 'normal', fontSize: 15 }}
            variant="subtitle1"
            component="div"
          >
            {title}
          </Typography>
          <Typography
            sx={{ marginTop: 1, fontSize: 12 }}
            variant="body2"
            color="text.secondary"
          >
            {`${dateString}`}
          </Typography>

          <Chip
            variant="filled"
            color={`${registrationType}`}
            label={registrationTypeString}
            icon={<TaskAlt />}
            sx={{ width: '100%' }}
          ></Chip>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

MinimizedEventCard.propTypes = {
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
export default MinimizedEventCard;
