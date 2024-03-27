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
import MinimizedEventCard from '../event-display/MinimizedEventCard';

const MyEventsStack = ({ events, eventDetailsOpenFunc }) => {
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
        {events
          ?.filter((event) => event.registrationType !== 'none')
          .map((item, index) => {
            return (
              <MinimizedEventCard
                key={index}
                id={index}
                event={item}
                openEventFunc={eventDetailsOpenFunc}
              />
            );
          })}
      </Stack>
    </Container>
  );
};

MyEventsStack.propTypes = {
  events: PropTypes.array,
};
export default MyEventsStack;
