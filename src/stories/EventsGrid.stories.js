import MinimizedEventCard from '../shared-components/event-display/MinimizedEventCard';
import { Header } from './Header';
import { fn } from '@storybook/test';
import { theme } from '../app/themeUtils';
import { ThemeProvider } from '@emotion/react';
import { Container, Grid } from '@mui/material';
import * as sampleEvents from './sampleEvents';
import EventsGrid from '../shared-components/Navigation/EventsGrid';

export default {
  title: 'Events/EventsGrid',
  component: EventsGrid,
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
    events: [
      sampleEvents.hostingEvent,
      sampleEvents.attendingEvent,
      sampleEvents.volunteeringEvent,
      sampleEvents.volunteeringEvent,
      sampleEvents.attendingEvent,
      sampleEvents.volunteeringEvent,
      sampleEvents.hostingEvent,
      sampleEvents.hostingEvent,
      sampleEvents.hostingEvent,
      sampleEvents.attendingEvent,
      sampleEvents.attendingEvent,
      sampleEvents.hostingEvent,
      sampleEvents.hostingEvent,
      sampleEvents.hostingEvent,
    ],
    eventDetailsOpenFunc: (eventData) => {
      alert('Lol haha cringe you are! What a 100Z3R');
    },
  },
};
