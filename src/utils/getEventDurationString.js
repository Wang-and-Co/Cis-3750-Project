const getEventDurationString = (start, end) => {
  let duration = (end - start) / 1000;

  let hours = duration / 3600;

  return `${hours} hours`;
};

export default getEventDurationString;
