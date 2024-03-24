import { IcecreamOutlined, Inbox, Mail } from '@mui/icons-material';
import {
  List,
  Toolbar,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Drawer,
  Grid,
} from '@mui/material';
import { Box } from '@mui/system';
import PropTypes from 'prop-types';
import EventCard from '../event-display/EventCard';

const EventsGrid = ({ eventDetailsOpenFunc, events }) => {
  return (
    <Grid container spacing={1}>
      {events.map((item, index) => {
        return (
          <Grid item xs={4} key={index}>
            <EventCard
              id={index}
              event={item}
              openEventFunc={eventDetailsOpenFunc}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

EventsGrid.propTypes = {
  eventDetailsOpenFunc: PropTypes.func,
  events: PropTypes.array,
};

export default EventsGrid;
