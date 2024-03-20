import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Grid,
  List,
  Stack,
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
import MinimizedEventCard from './MinimizedEventCard';
import { theme } from '../../app/themeUtils';

const MyEventsSidebar = ({ events, eventDetailsOpenFunc }) => {
  return (
    <Container sx={{ maxHeight: '100%', width: '100%' }}>
      <Typography sx={{ textAlign: 'center' }} variant="h6">
        My Events
      </Typography>
      <Divider
        variant="fullWidth"
        sx={{ marginBottom: 1, borderBottomWidth: 3 }}
      />
      <Stack spacing={2} sx={{ maxHeight: '100%', overflow: 'auto' }}>
        {events.map((item, index) => {
          return (
            <MinimizedEventCard
              key={index}
              id={index}
              event={item}
              onClick={eventDetailsOpenFunc}
            />
          );
        })}
      </Stack>
    </Container>
  );
};

MyEventsSidebar.propTypes = {
  events: PropTypes.array,
};
export default MyEventsSidebar;
