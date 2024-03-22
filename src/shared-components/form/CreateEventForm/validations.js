import * as yup from 'yup';

const getCreateEventValidationSchema = () => {
  yup.object({
    title: yup
      .string()
      .required('Event title is required')
      .max(40, 'Title is maximum 40 characters'),
    description: yup
      .string()
      .required('Description of event is required.')
      .max(500, 'Description must be 500 characters maximum'),
    wellnessType: yup.string().required(),
    isOnline: yup.boolean(),
    maxVolunteers: yup
      .number()
      .required('Must specify how many volunteers are required')
      .min(0),
    maxAttendees: yup.number().min(1, 'Event must have atleast 1 attendee'),
    cost: yup.number().min(0, 'cost cannot be negative'),
    startDateTime: yup.date(),
    endDateTime: yup.date(),
    location: yup.object({
      address: yup.string().required(),
      road: yup.string(),
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
  });
};
