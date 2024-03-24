const getInitialFormValues = () => ({
  title: '',
  description: '',
  wellnessType: '',
  isOnline: false,
  maxVolunteers: '',
  maxAttendees: '',
  cost: '',
  startDateTime: '',
  endDateTime: '',
  eventDate: '',
  location: {
    address: '',
    road: '',
    city: '',
    province: '',
    postalCode: '',
    extraInstructions: '',
  },
  image: undefined,
});

const overviewProperties = [
  {
    title: 'Event Title',
    description: 'You better make a good title',
    fieldProps: { name: 'title', label: 'Event Title', required: true },
  },
  {
    title: 'Description',
    description: 'Write a short description of your event!',
    fieldProps: {
      name: 'description',
      label: 'Description',
      required: true,
    },
  },
];

const locationTimeProperties = [
  {
    spacing: 12,
    fieldProps: { name: 'location.address', label: 'Address', required: true },
  },
  {
    spacing: 4,
    fieldProps: { name: 'location.city', label: 'City', required: true },
  },
  {
    spacing: 4,
    fieldProps: {
      name: 'location.province',
      label: 'Province',
      required: true,
    },
  },
  {
    spacing: 6,
    fieldProps: {
      name: 'location.postalCode',
      label: 'Postal Code',
      required: true,
    },
  },
  {
    spacing: 12,
    fieldProps: {
      name: 'location.extraInstructions',
      label: 'Extra instructions',
      required: true,
    },
  },
];

export { getInitialFormValues, overviewProperties, locationTimeProperties };
