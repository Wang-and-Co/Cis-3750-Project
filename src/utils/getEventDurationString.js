const getEventDurationString = (start, end) => {
  let duration = (end - start) / 1000;

  let hours = duration / 3600;

  return `${Math.round(hours * 10.0) / 10.0} hours`;
};

export default getEventDurationString;
