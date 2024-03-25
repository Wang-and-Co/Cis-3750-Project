export const USER_TYPES = {
  VOLUNTEER: 'Volunteer',
  ATTENDEE: 'Attendee',
  HOST: 'Host',
};

export const getRegistrationTypeMessage = (userType) =>
  ({
    volunteer: 'Volunteering',
    attendee: 'Attending',
    host: 'Hosting',
    none: null,
  })[userType];
