import * as yup from 'yup';

// getter for the validation schema. Is not a constant because we want an instance per usage
export const getSignUpFormValidationSchema = () =>
  yup.object({
    email: yup
      .string()
      .email('Email cannot be empty.')
      .required('Email address is required.'),
    password: yup
      .string()
      .required('Password cannot be empty.')
      .min(8, 'Password must be 8 characters long.'),
    verifyPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Password must match')
      .required('Enter the password again'),
    fname: yup.string().required('First name cannot be empty.'),
    lname: yup.string().required('Last name cannot be empty.'),
  });
