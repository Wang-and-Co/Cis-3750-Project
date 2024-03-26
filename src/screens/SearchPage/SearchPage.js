import { Button, LinearProgress, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchEvents } from '../../app/api/events';
import useAsyncResponse from '../../shared-components/axios/useAsyncResponse';
import toast from 'react-hot-toast';
import EventsGrid from '../../shared-components/Navigation/EventsGrid';

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const [searchResults, setSearchResults] = useState([]);
  const { isLoading, callAsyncFunction } = useAsyncResponse(
    searchEvents,
    setSearchResults,
    () => toast('something went wrong, please try again'),
  );
  useEffect(() => {
    callAsyncFunction({ name: `${searchParams.get('name')}` });
  }, [searchParams]);
  return (
    <div>
      {isLoading && <LinearProgress />}
      <Typography variant="h3" align="center" marginTop={'2rem'}>
        {`Results for events named: '${searchParams.get('name')}'`}
      </Typography>
      {/* <EventsGrid
        events={searchResults}
        eventDetailsOpenFunc={(event) => {
          if (isLoggedIn) {
            setCurrentViewedEvent(event);
          } else {
            toast('You must be logged in to view events!');
          }
        }}
      /> */}
    </div>
  );
};
export default SearchPage;
