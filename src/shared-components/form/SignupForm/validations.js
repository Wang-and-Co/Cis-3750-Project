import { object, string, ref } from 'yup';

// getter for the validation schema. Is not a constant because we want an instance per usage
export const getLoginFormValidationSchema = () =>
  object({
    email: string()
      .email('Please enter a valid email address')
      .required('A value is required'),
    password: string()
      .required('A value is required')
      .min(8, 'Required 8 characters'),
    verifyPassword: string()
      .oneOf([ref('password'), null], 'Password must match'),
    firstName: string()
      .required('A value is required'),
    lastName: string()
      .required('A value is required')    

  });
