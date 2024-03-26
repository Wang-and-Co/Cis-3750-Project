export const getEventsFromAPIResponse = (apiEvents) => {
  const frontEndEvents = apiEvents.data.map((item) => {
    console.log('ITEM: ', item);
    return item;
  });

  console.log('Items: ', frontEndEvents);
  return frontEndEvents;
};
