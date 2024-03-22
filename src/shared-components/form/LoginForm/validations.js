import * as yup from 'yup';

// getter for the validation schema. Is not a constant because we want an instance per usage
export const getLoginFormValidationSchema = () =>
  yup.object({
    email: yup.string().email().required('A value is required'),
    password: yup
      .string()
      .required('A value is required')
      .min(8, 'Required 8 characters'),
  });
