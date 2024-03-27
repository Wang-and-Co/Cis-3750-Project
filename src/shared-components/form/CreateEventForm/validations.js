import * as yup from 'yup';

const getCreateEventValidationSchema = () =>
  yup.object({
    title: yup
      .string()
      .required('Event title is required')
      .max(50, 'Title is maximum 50 characters'),
    description: yup
      .string()
      .required('Description of event is required.')
      .max(500, 'Description must be 500 characters maximum'),

    startDateTime: yup.date().required('Must specify time event starts.'),
    endDateTime: yup
      .date()
      .test(
        'startEndTimes',
        'End time must be after start time.',
        (value, context) => {
          return (
            !context.parent?.startDateTime ||
            !value ||
            context.parent?.startDateTime - value < 0
          );
        },
      ),
    location: yup.object({
      address: yup.string().required('Address is required'),
      city: yup.string(),
      province: yup.string(),
      postalCode: yup
        .string()
        .matches(
          /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i,
          'Please enter a valid postal code',
        ),
      extraInstructions: yup.string(),
    }),
    image: yup.mixed().required('Required'),
    wellnessType: yup.string().required("Must specify event's wellness type."),
    cost: yup.number().min(0, 'Cost cannot be negative'),
    isOnline: yup.boolean(),
    maxVolunteers: yup
      .number()
      .required('Must specify how many volunteers are required')
      .min(0)
      .integer('Limit cannot be a decimal.'),
    maxAttendees: yup
      .number()
      .min(1, 'Event must have atleast 1 attendee')
      .required('You must specify number of attendees')
      .integer('Limit cannot be a decimal.'),
  });

export { getCreateEventValidationSchema };
