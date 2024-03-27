import toast from 'react-hot-toast';
import useAsyncResponse from '../axios/useAsyncResponse';
import { useEffect, useState } from 'react';
import { getParsedEventPayload } from '../event-display/utils';
import { retrieveEvents } from '../../app/api/events';
import useAuth from './useAuth';
const useEventFetching = (payload, searchApi) => {
  const { isLoggedIn } = useAuth();
  const [mainEventList, setMainEventList] = useState([]);
  const [registeredEvents, setRegisteredEvents] = useState([]);
  const [isForceFetched, setIsForceFetched] = useState(false);

  const { isLoading: isSearchLoading, callAsyncFunction: callSearchAsync } =
    useAsyncResponse(
      searchApi,
      ({ data }) => {
        setMainEventList(data?.map((event) => getParsedEventPayload(event)));
      },
      () => toast('Something went wrong (search results), please try again.'),
    );

  const {
    isLoading: isRegisteredLoading,
    callAsyncFunction: callRegisteredAsync,
  } = useAsyncResponse(
    retrieveEvents,
    ({ data }) => {
      setRegisteredEvents(data?.map((event) => getParsedEventPayload(event)));
    },
    () => toast('Something went wrong (registered events), please try again.'),
  );

  useEffect(() => {
    if (!isForceFetched) return;

    callSearchAsync(payload);
    isLoggedIn && callRegisteredAsync();
    setIsForceFetched(false);
  }, [isForceFetched, isLoggedIn]);

  useEffect(() => {
    setIsForceFetched(true);
  }, [isLoggedIn]);

  const forceFetchData = () => {
    setIsForceFetched(true);
  };

  return {
    mainEventList,
    registeredEvents,
    isLoading: isRegisteredLoading || isSearchLoading,
    forceFetchData,
  };
};
export default useEventFetching;
