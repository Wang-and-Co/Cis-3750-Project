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
    registrationType,
  } = event;

  const dateString = `${dateFormat(startDateTime, 'dd/mm/yyyy hh:mm TT')}`;
  const registrationTypeString = getRegistrationTypeMessage(registrationType);
  const backgroundColour = getRegistrationTypeColour(registrationType);

  return (
    <Card sx={{ backgroundColor: backgroundColour }}>
      <CardActionArea onClick={onClick}>
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
    registrationType: PropTypes.string,
  }),
  onClick: PropTypes.func,
};
export default MinimizedEventCard;
