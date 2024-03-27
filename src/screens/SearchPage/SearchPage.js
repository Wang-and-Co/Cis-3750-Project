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
import useEventFetching from '../../shared-components/hooks/useEventFetching.js';

const SIDEBAR_RIGHT_WIDTH_PERCENT = 25;

const SearchPage = () => {
  const { isLoggedIn } = useAuth();
  const [searchParams] = useSearchParams();
  const { mainEventList, registeredEvents, forceFetchData, isLoading } =
    useEventFetching({ name: `${searchParams.get('name')}` }, searchEvents);

  useEffect(() => {
    forceFetchData();
  }, [isLoggedIn, searchParams.get('name')]);

  const [selectedEvent, setSelectedEvent] = useState(undefined);
  // Fetching data from server

  const sidebarWidthToUse = isLoggedIn ? SIDEBAR_RIGHT_WIDTH_PERCENT + 3 : 0;

  return (
    <Box width={`${100 - sidebarWidthToUse}%`}>
      {isLoading && <LinearProgress />}

      <Container
        sx={{
          paddingRight: sidebarWidthToUse > 0 ? 5 : 0,
        }}
      >
        <Typography variant="h6" align="left" marginTop={'2rem'}>
          {`We found ${mainEventList?.length ?? 0} results for events named '${searchParams.get('name')}'.`}
        </Typography>
        {mainEventList?.length > 0 ? (
          <EventsGrid
            events={mainEventList?.length > 0 ? mainEventList : []}
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
              triggerRefresh={forceFetchData}
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
