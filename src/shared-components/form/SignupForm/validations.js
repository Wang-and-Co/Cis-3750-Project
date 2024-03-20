import { object, string, ref } from 'yup';

// getter for the validation schema. Is not a constant because we want an instance per usage
export const getLoginFormValidationSchema = () =>
  object({
    email: string()
      .email('Email address is not valid.')
      .required('Please provide an email address'),
    password: string()
      .required('A password is required to login.')
      .min(8, 'Password must be at least 8 characters long.'),
  });
export const getSignUpFormValidationSchema = () =>
  object({
    email: string()
      .email('Email cannot be empty.')
      .required('Email address is required.'),
    password: string()
      .required('Password cannot be empty.')
      .min(8, 'Password must be 8 characters long.'),
    verifyPassword: string()
      .oneOf([ref('password'), null], 'Password must match')
      .required('Enter the password again'),
    firstName: string().required('First name cannot be empty.'),
    lastName: string().required('Last name cannot be empty.'),
  });
