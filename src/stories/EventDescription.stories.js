import EventDescription from '../shared-components/event-display/EventDescription';
import { Header } from './Header';
import { fn } from '@storybook/test';
import { theme } from '../app/themeUtils';
import { ThemeProvider } from '@emotion/react';
import { Grid } from '@mui/material';

export default {
  title: 'Events/EventDescription',
  component: EventDescription,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
};

export const Primary = {
  args: {
    open: true,
    setOpen: () => {},
    event: {
      eventID: 1,
      organizerID: 0,
      title: 'NCIM Track League',
      description:
        'Come out and test your track racing ability! Riders with a UCI Track Cycling license and race certifications are eligible to participate in NCIM race nights which consist of sprint-specific nights, bunch racing, and even timed events.',
      startDateTime: Date.now(),
      endDateTime: Date.now(),
      location: {
        address: 2015,
        road: 'Pan Am Blvd.',
        city: 'Milton',
        province: 'ON',
        postalCode: 'L9E 0K7',
        extraInstructions: 'Mattamy National Cycling Centre',
      },
      isOnline: false,
      attendees: { current: 10, max: 100 },
      volunteers: { current: 5, max: 50 },
      wellnessType: 'Fitness',
      cost: 0,
      imageUri:
        'https://www.milton.ca/en/arts-and-recreation/resources/group-cycling-banner.jpg',
      registrationType: 'none',
    },
    onClick: (eventData) => {
      alert('Lol haha cringe you are! What a 100Z3R');
    },
  },
};

export const Secondary = {
  args: {
    open: true,
    setOpen: () => {},
    event: {
      eventID: 5,
      organizerID: 2,
      title: 'Skills and Drills - Badminton - Level 1 (9-12 years)',
      description:
        'Learn the basics of badminton in this fast-pace class! Each day will begin with skill-building drills, followed by an action-packed game to put your new skills to practice. Note: No experience necessary. Equipment will be provided. Please bring a water bottle and non-marking shoes. No class March 12.',
      startDateTime: new Date(),
      endDateTime: new Date(),
      location: {
        address: 2015,
        road: 'Pan Am Blvd.',
        city: 'Milton',
        province: 'ON',
        postalCode: 'L9E 0K7',
        extraInstructions: 'Mattamy National Cycling Centre, Gymnasium #1',
      },
      isOnline: false,
      attendees: { current: 100, max: 100 },
      volunteers: { current: 50, max: 50 },
      wellnessType: 'Fitness',
      cost: 12.07,
      imageUri:
        'https://miltonbadmintonclub.files.wordpress.com/2017/12/dscf2190.jpg',
      registrationType: 'none',
    },
    onClick: (eventData) => {
      alert('Lol haha cringe you are! What a 100Z3R');
    },
  },
};
