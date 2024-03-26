import {
  Box,
  Button,
  Container,
  Drawer,
  Toolbar,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SidebarRight from '../../shared-components/Navigation/SidebarRight';
import { useState } from 'react';
import MyEventsStack from '../../shared-components/Navigation/MyEventsStack';
import EventDescription from '../../shared-components/event-display/EventDescription';
import EventsGrid from '../../shared-components/Navigation/EventsGrid';
import * as sampleEvents from '../../stories/sampleEvents.js';
import useAuth from '../../shared-components/hooks/useAuth.js';

const SIDEBAR_RIGHT_WIDTH_PERCENT = 25;
const GUELPH_SPLASH_IMAGE =
  'https://globalnews.ca/wp-content/uploads/2021/09/GettyImages-187167738.jpg?quality=85&strip=all&w=1200';
const HomePage = () => {
  const { isLoggedIn, setAuthInfo, handleLogout } = useAuth();
  const sidebarWidthToUse = isLoggedIn ? SIDEBAR_RIGHT_WIDTH_PERCENT + 10 : 3;

  const [displayedEvents, setDisplayedEvents] = useState([
    sampleEvents.attendingEvent,
    sampleEvents.hostingEvent,
    sampleEvents.volunteeringEvent,
    sampleEvents.unregisteredEvent,
  ]);
  const [registeredEvents, setRegisteredEvents] = useState([
    sampleEvents.attendingEvent,
    sampleEvents.hostingEvent,
    sampleEvents.volunteeringEvent,
  ]);
  const [currentViewedEvent, setCurrentViewedEvent] = useState(null);

  return (
    <Box width={`${100 - sidebarWidthToUse}%`}>
      <Container
        sx={{
          backgroundImage: `url(${GUELPH_SPLASH_IMAGE})`,
          backgroundSize: 'cover',
          width: '100%',
          height: '40rem',
          margin: 0,
          padding: 0,
        }}
      >
        <Container
          sx={{
            width: '100%',
            height: '100%',
            padding: 0,
            margin: 0,
            bgcolor: '#00bc1078',
            justifyContent: 'center',
            alignContent: 'center',
          }}
        >
          <Typography
            sx={{ fontSize: 30, opacity: 1, marginTop: 'auto' }}
            color="darkestBlue.main"
            textAlign="center"
          >
            Welcome to ComBo Community Board!
          </Typography>
        </Container>
      </Container>
      <Box sx={{ marginLeft: 2, width: '100%' }}>
        <Typography variant="h5" align="left">
          Welcome to ComBo Community Board!
        </Typography>
        <Typography variant="h6" align="left">
          Click an event to view more information about it.
        </Typography>
        <EventsGrid
          events={displayedEvents}
          eventDetailsOpenFunc={setCurrentViewedEvent}
        />
      </Box>
      {isLoggedIn ? (
        <SidebarRight widthPercent={SIDEBAR_RIGHT_WIDTH_PERCENT}>
          {currentViewedEvent == null ? (
            <MyEventsStack
              events={registeredEvents}
              eventDetailsOpenFunc={setCurrentViewedEvent}
            />
          ) : (
            <EventDescription
              closeFunc={() => {
                setCurrentViewedEvent(null);
              }}
              event={currentViewedEvent}
            />
          )}
        </SidebarRight>
      ) : (
        <></>
      )}
    </Box>
  );
};
export default HomePage;
