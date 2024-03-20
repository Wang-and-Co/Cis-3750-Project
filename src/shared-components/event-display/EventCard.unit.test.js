import { create } from 'react-test-renderer';
import TestProvider from '../../../TestProvider';
import EventCard from './EventCard';
const props = {
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
  onClick: jest.fn(),
};

let eventCardRenderer;
let eventCardInstance;

beforeEach(async () => {
  await renderGenericModal(props);
});

afterEach(() => {
  eventCardRenderer.unmount();
});
describe('EventCard', () => {
  it('renders correctly', () => {
    expect(eventCardRenderer.toJSON()).toMatchSnapshot();
  });
  it('passes the correct props', () => {
    expect(GetInputProp('id')).toBe(props.id);
    expect(GetInputProp('event')).toStrictEqual(props.event);
    expect(GetInputProp('onClick')).toBe(props.onClick);
  });
});

const GetInputProp = (prop) =>
  eventCardInstance.findByType(EventCard).props[prop];

const renderGenericModal = async (editorProps) => {
  eventCardRenderer = await create(
    <TestProvider>
      <EventCard {...editorProps}></EventCard>
    </TestProvider>,
  );
  eventCardInstance = eventCardRenderer.root;
};
