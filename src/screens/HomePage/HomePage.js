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
import { useEffect, useState } from 'react';
import MyEventsStack from '../../shared-components/Navigation/MyEventsStack';
import EventDescription from '../../shared-components/event-display/EventDescription';
import EventsGrid from '../../shared-components/Navigation/EventsGrid';
import * as sampleEvents from '../../stories/sampleEvents.js';
import useAuth from '../../shared-components/hooks/useAuth.js';
import toast from 'react-hot-toast';
import useEventFetching from '../../shared-components/hooks/useEventFetching.js';
import { retrieveEvents } from '../../app/api/events.js';
import { getParsedEventPayload } from '../../shared-components/event-display/utils.js';
import useAsyncResponse from '../../shared-components/axios/useAsyncResponse.js';

// CONSTANTS
const SIDEBAR_RIGHT_WIDTH_PERCENT = 25;
const GUELPH_SPLASH_IMAGE =
  'https://fusionhomes.com/app/uploads/2019/09/Guelph-July-2014-63-2.jpg';

const HomePage = () => {
  const { isLoggedIn, userId } = useAuth();
  const sidebarWidthToUse = isLoggedIn ? SIDEBAR_RIGHT_WIDTH_PERCENT + 3 : 0;
  const [displayedEvents, setDisplayedEvents] = useState([]);
  const registeredEvents = displayedEvents.filter(
    (events) => events.registeredEvents !== 'none',
  );
  const [currentViewedEvent, setCurrentViewedEvent] = useState(null);
  const [isForceFetched, setIsForceFetched] = useState(true);
  useEffect(() => {
    setIsForceFetched(true);
  }, [isLoggedIn]);

  const { isLoading, callAsyncFunction } = useAsyncResponse(
    retrieveEvents,
    ({ data }) => {
      setDisplayedEvents(data?.map((event) => getParsedEventPayload(event)));
    },
    () => toast('Something went wrong (search results), please try again.'),
  );
  useEffect(() => {
    if (!currentViewedEvent) return;
    setCurrentViewedEvent(
      displayedEvents.find(
        (event) => event.eventID === currentViewedEvent.eventID,
      ),
    );
  }, [displayedEvents]);

  useEffect(() => {
    if (!isForceFetched) return;

    callAsyncFunction();
    setIsForceFetched(false);
  }, [isForceFetched, isLoggedIn]);

  return (
    <Box width={`${100 - sidebarWidthToUse}%`}>
      <Container
        sx={{
          backgroundImage: `url(${GUELPH_SPLASH_IMAGE})`,
          backgroundOrigin: 'content-box',
          backgroundSize: 'cover',
          backgroundPositionY: '50%',
          boxShadow: 5,
          width: '100%',
          height: isLoggedIn ? '10rem' : '30rem',
          margin: 0,
          padding: 0,
        }}
        maxWidth={false}
        disableGutters
      >
        <Container
          sx={{
            width: '100%',
            height: '100%',
            bgcolor: '#54ff5199',
            justifyContent: 'center',
            alignContent: 'center',
            padding: 0,
            margin: 0,
            display: 'flex',
            flexDirection: 'column',
          }}
          maxWidth={false}
          disableGutters
        >
          <Typography
            sx={{
              fontSize: isLoggedIn ? 30 : 60,
              fontWeight: 'bold',
            }}
            color="darkestBlue.main"
            textAlign="center"
          >
            Welcome to
          </Typography>
          <img
            src={'/ComboLogo.png'}
            style={{ height: isLoggedIn ? '40%' : '20%', objectFit: 'contain' }}
          />
          <Typography
            sx={{
              fontSize: isLoggedIn ? 20 : 30,
              fontWeight: 'bold',
            }}
            color="darkestBlue.main"
            textAlign="center"
          >
            {`Guelph's community wellness activity board!`}
          </Typography>
        </Container>
      </Container>
      <Container
        sx={{ width: '100%', paddingRight: sidebarWidthToUse > 0 ? 5 : 0 }}
      >
        <Typography variant="h6" align="left" marginTop={4} marginBottom={4}>
          Here are some events you might be interested in:
        </Typography>
        <EventsGrid
          events={displayedEvents}
          eventDetailsOpenFunc={(event) => {
            if (isLoggedIn) {
              setCurrentViewedEvent(event);
            } else {
              toast('You must be logged in to view events!');
            }
          }}
        />
      </Container>
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
              triggerRefresh={() => setIsForceFetched(true)}
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
