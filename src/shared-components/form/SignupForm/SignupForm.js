import { Form, Formik } from 'formik';
import { initialValues } from './utils';
import {
  getLoginFormValidationSchema,
  getSignUpFormValidationSchema,
} from './validations';
import { InputField } from '../InputField';
import { Button, Grid, Link, Stack, Typography } from '@mui/material';
/**
 * @typedef {Object} SignupFormProps
 * @property {function} onSuccess function handler after form is successfully submitted. Should handle the endpoint calls
 * with Backend for logging in.
 * @property {function} footerOnClick
 */

/**
 * A login form that contains everything required for logins, including the submit button.
 * @param {SignupFormProps} props - {@link LoginFormProps} object
 * @type {React.FC<SignupFormProps>}
 */
const SignupForm = ({ handleSubmit, footerOnClick }) => {
  const validationSchema = getSignUpFormValidationSchema();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      validateOnChange
      validateOnBlur
      onSubmit={handleSubmit}
    >
      {(formikProps) => (
        <Form>
          <Stack spacing={1} sx={{ marginTop: '1.5rem' }}>
            <div>
              <Typography variant="subtitle2">
                {'By clicking “Sign up”, you agree to our '}
                <Link
                  href={'http://localhost:3000/legal/terms-of-service'}
                  target="_blank"
                >
                  Terms of Service
                </Link>{' '}
                {' and acknowledge you have read our '}
                <Link
                  href={'http://localhost:3000/legal/terms-of-service'}
                  target="_blank"
                >
                  privacy policy
                </Link>
              </Typography>
            </div>
            <InputField
              name="firstName"
              label="First Name"
              required
              autoComplete=""
            ></InputField>
            <InputField
              name="lastName"
              label="Last Name"
              required
              autoComplete=""
            ></InputField>
            <InputField
              name="email"
              label="Email"
              required
              autoComplete="email"
            ></InputField>
            <InputField
              name="password"
              label="Password"
              required
              helperText="Password must be 8 characters long."
              autoComplete="current-password"
            ></InputField>
            <InputField
              name="verifyPassword"
              label="Verify Password"
              required
              autoComplete="current-password"
            ></InputField>
            <Button
              onClick={formikProps.handleSubmit}
              variant="contained"
              disabled={formikProps.isSubmitting}
            >
              Sign Up
            </Button>
            <div style={{ display: 'flex' }}>
              <Typography inline variant={'subtitle2'}>
                Already have an account?&nbsp;
              </Typography>
              <Link
                inline
                variant={'subtitle2'}
                onClick={footerOnClick}
                disabled={formikProps.isSubmitting}
              >
                Sign in
              </Link>
            </div>
          </Stack>
        </Form>
      )}
    </Formik>
  );
};
export default SignupForm;
