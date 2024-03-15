import { object, string } from 'yup';

// getter for the validation schema. Is not a constant because we want an instance per usage
export const getLoginFormValidationSchema = () =>
  object({
    name: string().required('A value is required'),
    password: string()
      .required('A value is required')
      .min(8, 'Required 8 characters'),
  });
