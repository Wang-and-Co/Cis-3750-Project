const getLocationString = ({
  address,
  city = '',
  province = '',
  postalCode = '',
  extraInstructions = '',
}) => {
  let locationString = address.replaceAll('-', '-0');
  locationString += '--' + city.replaceAll('-', '-0');
  locationString += '--' + province.replaceAll('-', '-0');
  locationString += '--' + postalCode.replaceAll('-', '-0');
  locationString += '--' + extraInstructions.replaceAll('-', '-0');
  return locationString;
};

const getLocationFromString = (locationString) => {
  const locationSections = locationString?.split('--');
  if (locationSections.length !== 5) {
    console.log('did not find all parts from the string!');
    return {};
  }
  const location = [
    'address',
    'city',
    'province',
    'postalCode',
    'extraInstructions',
  ].reduce((prevValue, current, index) => {
    const parsedString = locationSections[index].replaceAll('-0', '-');
    return { ...prevValue, [current]: parsedString };
  }, {});

  return location;
};

const getParsedEventPayload = (event) => {
  const {
    id,
    title,
    startTime,
    endTime,
    location,
    isOnline,
    description,
    attendees,
    volunteers,
    wellnessType,
    organizer_id,
    cost,
    imageUri,
  } = event;

  const newEvent = {
    eventID: id,
    title,
    description,
    startDateTime: new Date(startTime),
    endDateTime: new Date(endTime),
    location: getLocationFromString(location),
    isOnline,
    attendees,
    volunteers,
    wellnessType,
    cost: cost / 100,
    imageUri,
    registrationType: 'host',
    organizerID: organizer_id,
  };
  return newEvent;
};

export { getLocationFromString, getLocationString, getParsedEventPayload };
