import MinimizedEventCard from '../shared-components/event-display/MinimizedEventCard';
import { Header } from './Header';
import { fn } from '@storybook/test';
import { theme } from '../app/themeUtils';
import { ThemeProvider } from '@emotion/react';
import { Grid } from '@mui/material';
import * as sampleEvents from './sampleEvents';

export default {
  title: 'Events/MinimizedEventCard',
  component: MinimizedEventCard,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Grid
          sx={{ maxWidth: '30%', backgroundColor: '#cdcdcd', padding: 5 }}
          container
          spacing={1}
          direction={'column'}
        >
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
    event: sampleEvents.attendingEvent,
    openEventFunc: (eventData) => {
      alert('Lol haha cringe you are! What a 100Z3R');
    },
  },
};

export const Volunteer = {
  args: {
    event: sampleEvents.volunteeringEvent,
    openEventFunc: (eventData) => {
      alert('Lol haha cringe you are! What a 100Z3R');
    },
  },
};

export const Host = {
  args: {
    event: sampleEvents.hostingEvent,
    openEventFunc: (eventData) => {
      alert('Lol haha cringe you are! What a 100Z3R');
    },
  },
};
