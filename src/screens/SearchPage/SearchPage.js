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
import SidebarRight from '../../shared-components/Navigation/SidebarRight';
import MyEventsStack from '../../shared-components/Navigation/MyEventsStack';
import EventDescription from '../../shared-components/event-display/EventDescription.js';
import { getParsedEventPayload } from '../../shared-components/event-display/utils.js';

const SIDEBAR_RIGHT_WIDTH_PERCENT = 25;

const SearchPage = () => {
  const { isLoggedIn } = useAuth();
  const [searchParams] = useSearchParams();

  const [searchResults, setSearchResults] = useState([]);
  const [registeredEvents, setRegisteredEvents] = useState([]);

  const [selectedEvent, setSelectedEvent] = useState(undefined);

  // Fetching data from server
  const { isLoading: isSearchLoading, callAsyncFunction: callSearchAsync } =
    useAsyncResponse(
      searchEvents,
      ({ data }) => {
        setSearchResults(data?.map((event) => getParsedEventPayload(event)));
      },
      () => toast('Something went wrong (search results), please try again.'),
    );

  const {
    isLoading: isRegisteredLoading,
    callAsyncFunction: callRegisteredAsync,
  } = useAsyncResponse(
    retrieveEvents,
    ({ data }) => {
      setRegisteredEvents(
        setSearchResults(data?.map((event) => getParsedEventPayload(event))),
      );
    },
    () => toast('Something went wrong (registered events), please try again.'),
  );

  // Effects
  useEffect(() => {
    callSearchAsync({ name: `${searchParams.get('name')}` });
  }, [searchParams]);

  useEffect(() => {
    callRegisteredAsync();
  }, []);

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
          {`We found ${searchResults?.length > 0 ? searchResults?.length : 0} results for events named '${searchParams.get('name')}'.`}
        </Typography>
        {searchResults?.length > 0 ? (
          <EventsGrid
            events={searchResults?.length > 0 ? searchResults : []}
            eventDetailsOpenFunc={(event) => {
              if (isLoggedIn) {
                setSelectedEvent(event);
              } else {
                toast('You must be logged in to view events!');
              }
            }}
          />
        ) : (
          <></>
        )}
      </Container>
      {isLoggedIn || selectedEvent ? (
        <SidebarRight widthPercent={SIDEBAR_RIGHT_WIDTH_PERCENT}>
          {selectedEvent ? (
            <EventDescription
              closeFunc={() => {
                setSelectedEvent(null);
              }}
              event={selectedEvent}
            />
          ) : (
            <MyEventsStack
              events={registeredEvents}
              eventDetailsOpenFunc={setSelectedEvent}
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
