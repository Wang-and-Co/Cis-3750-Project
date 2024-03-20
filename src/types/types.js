// import { WellnessType } from './WellnessType';

export const USER_TYPES = {
  VOLUNTEER: 'Volunteer',
  ATTENDEE: 'Attendee',
  HOST: 'Host',
};

export const getRegistrationTypeMessage = (userType) =>
  ({
    Volunteer: 'Registered as Volunteer',
    Attendee: 'Registered as Attendee',
    Host: 'You are the Host',
  })[userType];

export const getRegistrationTypeColour = (userType) =>
  ({
    Volunteer: '#87e1ff',
    Attendee: '#90ee90',
    Hosting: '#ff7dff',
  })[userType];
