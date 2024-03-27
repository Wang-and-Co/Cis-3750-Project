import { InputAdornment } from '@mui/material';
import { getLocationString } from '../../event-display/utils';

const getInitialFormValues = () => ({
  title: '',
  description: '',
  wellnessType: '',
  isOnline: false,
  maxVolunteers: undefined,
  maxAttendees: undefined,
  cost: undefined,
  startDateTime: '',
  endDateTime: '',
  eventDate: '',
  location: {
    address: '',
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
    description: 'Give a short title to represent your event!',
    fieldProps: { name: 'title', label: 'Event Title', required: true },
  },
  {
    title: 'Description',
    description:
      'Describe what your event here. It can be helpful to include what activities will happen, and what to do.',
    fieldProps: {
      name: 'description',
      label: 'Description',
      multiline: true,
      maxRows: 5,
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
    fieldProps: { name: 'location.city', label: 'City' },
  },
  {
    spacing: 4,
    fieldProps: {
      name: 'location.province',
      label: 'Province',
    },
  },
  {
    spacing: 6,
    fieldProps: {
      name: 'location.postalCode',
      label: 'Postal Code',
    },
  },
  {
    spacing: 12,
    fieldProps: {
      name: 'location.extraInstructions',
      label: 'Extra instructions',
    },
  },
];

const otherInfoProperties = [
  {
    title: 'Wellness Category',
    description: 'What wellness type does your event fit into?* ',
    fieldProps: {
      name: 'wellnessType',
      options: [
        { value: 'mental', label: 'Mental Wellness' },
        { value: 'physical', label: 'Physical Wellness' },
        { value: 'intellectual', label: 'Intellectual Wellness' },
      ],
    },
    type: 'radio',
    required: true,
  },
  {
    title: 'Cost',
    description:
      'Will you be charging for tickets to your event? Leave 0 for free attendance.',
    fieldProps: {
      name: 'cost',
      label: 'Event Cost',
      required: true,
      InputProps: {
        startAdornment: <InputAdornment position="start">$</InputAdornment>,
      },
    },
    type: 'number',
  },
  {
    title: 'Platform',
    description: 'Is your event taking place online?',
    fieldProps: {
      name: 'isOnline',
      options: [
        { value: false, label: 'In-Person Event' },
        { value: true, label: 'Online' },
      ],
    },
    type: 'radio',
  },
];

const participantLevelsProperties = [
  {
    title: 'Attendees',
    description: 'How many attendees do you expect to come?',
    fieldProps: {
      name: 'maxAttendees',
      label: 'Maximum Attendees',
      required: true,
    },
    type: 'number',
  },
  {
    title: 'Volunteers',
    description: 'How many volunteers will you need to run the event?',
    fieldProps: {
      name: 'maxVolunteers',
      label: 'Maximum Volunteers',
      helperText: 'Can enter none (0) or more',
      required: true,
    },
    type: 'number',
  },
];

const getDateAdjustedByTime = (date, dateTimeAdjustment) => {
  const newDate = new Date(date);
  newDate.setHours(dateTimeAdjustment.getHours());
  newDate.setMinutes(dateTimeAdjustment.getMinutes());
  newDate.getSeconds(dateTimeAdjustment.getSeconds());
  return newDate;
};

const getFormattedFormPayload = (eventFormData) => {
  console.log(eventFormData);
  const {
    image,
    title,
    description,
    startDateTime,
    endDateTime,
    eventDate,
    location,
    wellnessType,
    isOnline,
    cost,
    maxVolunteers,
    maxAttendees,
  } = eventFormData;
  const locationString = getLocationString(location);
  const startDate = getDateAdjustedByTime(eventDate, startDateTime);
  const endDate = getDateAdjustedByTime(eventDate, endDateTime);
  const imageName = image?.name ?? 'default';
  console.log(imageName);
  const payload = {
    title,
    description,
    wellnessType,
    maxAttendees,
    maxVolunteers,
    startTime: startDate.valueOf(),
    endTime: endDate.valueOf(),
    isOnline,
    location: locationString,
    cost: Math.round(cost * 100),
    image: imageName,
  };
  return payload;
};

export {
  getInitialFormValues,
  overviewProperties,
  locationTimeProperties,
  otherInfoProperties,
  participantLevelsProperties,
  getFormattedFormPayload,
};
