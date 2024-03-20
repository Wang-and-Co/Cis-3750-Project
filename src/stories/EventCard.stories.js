import EventCard from '../shared-components/event-display/EventCard';
import { Header } from './Header';
import { fn } from '@storybook/test';
import { theme } from '../app/themeUtils';
import { ThemeProvider } from '@emotion/react';
import { Grid } from '@mui/material';

export default {
  title: 'Events/EventCard',
  component: EventCard,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <Story />
          </Grid>
          <Grid item xs={3}>
            <Story />
          </Grid>
          <Grid item xs={3}>
            <Story />
          </Grid>
        </Grid>
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
    event: {
      title: 'Test Event',
      description:
        'This is the event description! Here you can learn all about the event. This is a really cool event. It is a good event. This is an event. It is a good event. It is really cool.',
      startDateTime: Date.now(),
      endDateTime: Date.now(),
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
      imageUri: '',
    },
    onClick: () => {
      alert('Lol haha cringe you are! What a 100Z3R');
    },
  },
};

export const NoExtraDirections = {
  args: {
    id: 1,
    event: {
      title: 'Test Event',
      description:
        'This is the event description! Here you can learn all about the event. This is a really cool event. It is a good event. This is an event. It is a good event. It is really cool.',
      startDateTime: Date.now(),
      endDateTime: Date.now(),
      location: {
        address: 1,
        road: 'Example Rd',
        city: 'Guelph',
        province: 'ON',
        postalCode: 'A1A 1A1',
        extraInstructions: '',
      },
      isOnline: false,
      attendees: { current: 1, max: 55 },
      volunteers: { current: 5, max: 5 },
      wellnessType: 'Good',
      cost: 1324344342,
      imageUri: '',
    },
    onClick: () => {
      alert('Lol haha cringe you are! What a 100Z3R');
    },
  },
};
