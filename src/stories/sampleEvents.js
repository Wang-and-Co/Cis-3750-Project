export { hostingEvent, volunteeringEvent, attendingEvent, unregisteredEvent };

const hostingEvent = {
  eventID: 2,
  organizerID: 0,
  title: 'Wowie so many events!',
  description:
    'This is the event description! Here you can learn all about the event. This is a really cool event. It is a good event. This is an event. It is a good event. It is really cool.',
  startDateTime: new Date(Date.parse('04 Dec 2024 00:12:00 GMT')).getTime(),
  endDateTime: new Date(Date.parse('04 Dec 2024 15:00:00 GMT')).getTime(),
  location: {
    address: 1,
    road: 'Example Rd',
    city: 'Guelph',
    province: 'ON',
    postalCode: 'A1A 1A1',
    extraInstructions: 'Haha none',
  },
  isOnline: false,
  attendees: { current: 1, max: 55 },
  volunteers: { current: 5, max: 5 },
  wellnessType: 'Good',
  cost: 999,
  imageUri:
    'https://i0.wp.com/voyagecomics.com/wp-content/uploads/2021/10/smaug_dragon.webp?fit=1782%2C937&ssl=1',
  registrationType: 'Host',
};
const volunteeringEvent = {
  eventID: 1,
  organizerID: 0,
  title: 'A second event!',
  description:
    'This is the event description! Here you can learn all about the event. This is a really cool event. It is a good event. This is an event. It is a good event. It is really cool.',
  startDateTime: new Date(Date.parse('09 Dec 2024 00:12:00 GMT')).getTime(),
  endDateTime: new Date(Date.parse('20 Dec 2024 15:00:00 GMT')).getTime(),
  location: {
    address: 1,
    road: 'Example Rd',
    city: 'Guelph',
    province: 'ON',
    postalCode: 'A1A 1A1',
    extraInstructions: 'Haha none',
  },
  isOnline: false,
  attendees: { current: 1, max: 55 },
  volunteers: { current: 5, max: 5 },
  wellnessType: 'Good',
  cost: 999,
  imageUri:
    'https://i0.wp.com/voyagecomics.com/wp-content/uploads/2021/10/smaug_dragon.webp?fit=1782%2C937&ssl=1',
  registrationType: 'Volunteer',
};
const attendingEvent = {
  eventID: 0,
  organizerID: 0,
  title: 'Test Event - With a longer title - That you can use - Very cool!',
  description:
    'This is the event description! Here you can learn all about the event. This is a really cool event. It is a good event. This is an event. It is a good event. It is really cool.',
  startDateTime: new Date(Date.parse('01 Apr 2024 12:30:00 GMT')).getTime(),
  endDateTime: new Date(Date.parse('01 Apr 2024 13:00:00 GMT')).getTime(),
  location: {
    address: 1,
    road: 'Example Rd',
    city: 'Guelph',
    province: 'ON',
    postalCode: 'A1A 1A1',
    extraInstructions: 'Haha none',
  },
  isOnline: false,
  attendees: { current: 1, max: 55 },
  volunteers: { current: 5, max: 5 },
  wellnessType: 'Good',
  cost: 999,
  imageUri:
    'https://i0.wp.com/voyagecomics.com/wp-content/uploads/2021/10/smaug_dragon.webp?fit=1782%2C937&ssl=1',
  registrationType: 'Attendee',
};
const unregisteredEvent = {
  eventID: 0,
  organizerID: 0,
  title: 'Test Event - With a longer title - That you can use - Very cool!',
  description:
    'This is the event description! Here you can learn all about the event. This is a really cool event. It is a good event. This is an event. It is a good event. It is really cool.',
  startDateTime: new Date(Date.parse('01 Apr 2024 12:30:00 GMT')).getTime(),
  endDateTime: new Date(Date.parse('01 Apr 2024 13:00:00 GMT')).getTime(),
  location: {
    address: 1,
    road: 'Example Rd',
    city: 'Guelph',
    province: 'ON',
    postalCode: 'A1A 1A1',
    extraInstructions: 'Haha none',
  },
  isOnline: false,
  attendees: { current: 1, max: 55 },
  volunteers: { current: 5, max: 5 },
  wellnessType: 'Good',
  cost: 999,
  imageUri:
    'https://i0.wp.com/voyagecomics.com/wp-content/uploads/2021/10/smaug_dragon.webp?fit=1782%2C937&ssl=1',
  registrationType: 'None',
};
