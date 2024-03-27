import {
  Box,
  Button,
  Container,
  LinearProgress,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { retrieveEvents, searchEvents } from '../../app/api/events';
import useAsyncResponse from '../../shared-components/axios/useAsyncResponse';
import toast from 'react-hot-toast';
import EventsGrid from '../../shared-components/Navigation/EventsGrid';
import useAuth from '../../shared-components/hooks/useAuth';
import * as sampleEvents from '../../stories/sampleEvents.js';
import SidebarRight from '../../shared-components/Navigation/SidebarRight';
import MyEventsStack from '../../shared-components/Navigation/MyEventsStack';
import EventDescription from '../../shared-components/event-display/EventDescription.js';

const SIDEBAR_RIGHT_WIDTH_PERCENT = 25;

const SearchPage = () => {
  const { isLoggedIn, setAuthInfo, handleLogout } = useAuth();
  const [searchParams] = useSearchParams();
  const [searchResults, setSearchResults] = useState([]);
  const [registeredEvents, setRegisteredEvents] = useState([]);
  const [currentViewedEvent, setCurrentViewedEvent] = useState(null);
  const [forceFetch, setForceFetch] = useState(false);
  const triggerRefresh = () => {
    setForceFetch(true);
  };
  // Fetching data from server
  const { isLoading: isSearchLoading, callAsyncFunction: callSearchAsync } =
    useAsyncResponse(
      searchEvents,
      (eventData) => {
        setSearchResults(eventData.data);
      },
      () => toast('Something went wrong (search results), please try again.'),
    );

  const {
    isLoading: isRegisteredLoading,
    callAsyncFunction: callRegisteredAsync,
  } = useAsyncResponse(
    retrieveEvents,
    (eventData) => {
      setRegisteredEvents(eventData.data);
    },
    () => toast('Something went wrong (registered events), please try again.'),
  );

  // Effects
  useEffect(() => {
    callSearchAsync({ name: `${searchParams.get('name')}` });
  }, [searchParams, forceFetch]);

  useEffect(() => {
    callRegisteredAsync();
  }, [currentViewedEvent, searchParams, forceFetch]);

  const sidebarWidthToUse = isLoggedIn ? SIDEBAR_RIGHT_WIDTH_PERCENT + 3 : 0;

  return (
    <Box width={`${100 - sidebarWidthToUse}%`}>
      {isSearchLoading && <LinearProgress />}

      <Container
        sx={{
          paddingRight: sidebarWidthToUse > 0 ? 5 : 0,
        }}
      >
        <Typography variant="h6" align="left" marginTop={'2rem'}>
          {`We found ${searchResults.length > 0 ? searchResults.length : 0} results for events named '${searchParams.get('name')}'.`}
        </Typography>
        {searchResults.length > 0 ? (
          <EventsGrid
            events={searchResults.length > 0 ? searchResults : []}
            eventDetailsOpenFunc={(event) => {
              if (isLoggedIn) {
                setCurrentViewedEvent(event);
              } else {
                toast('You must be logged in to view events!');
              }
            }}
          />
        ) : (
          <></>
        )}
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
              triggerRefresh={triggerRefresh}
            />
          )}
        </SidebarRight>
      ) : (
        <></>
      )}
    </Box>
  );
};
export default SearchPage;
