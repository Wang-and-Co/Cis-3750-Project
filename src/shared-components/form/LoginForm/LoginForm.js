import { Form, Formik } from 'formik';
import { initialValues } from './utils';
import { getLoginFormValidationSchema } from './validations';
import { InputField } from '../InputField';
import { Button, Stack, Typography, Link } from '@mui/material';
/**
 * @typedef {Object} LoginFormProps
 * @property {function} onSuccess function handler after form is successfully submitted. Should handle the endpoint calls
 * with Backend for logging in.
 * @property {function} footerOnClick
 */

/**
 * A login form that contains everything required for logins, including the submit button.
 * @param {LoginFormProps} props - {@link LoginFormProps} object
 * @type {React.FC<LoginFormProps>}
 */
const LoginForm = ({ onSuccess, handleSubmit, footerOnClick }) => {
  const validationSchema = getLoginFormValidationSchema(); // get the validation schema from validations file
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      validateOnChange={false}
      onSubmit={handleSubmit}
    >
      {(formikProps) => (
        <Form>
          <Stack spacing={1} sx={{ marginTop: '1.5rem' }}>
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
              type="password"
              autoComplete="current-password"
            ></InputField>
            <Button
              onClick={formikProps.handleSubmit}
              variant="contained"
              disabled={formikProps.isSubmitting}
            >
              Login
            </Button>
            <div style={{ display: 'flex' }}>
              <Typography inline variant={'subtitle2'}>
                First time here?&nbsp;
              </Typography>
              <Link
                inline
                variant={'subtitle2'}
                onClick={footerOnClick}
                disabled={formikProps.isSubmitting}
              >
                Sign up
              </Link>
            </div>
          </Stack>
        </Form>
      )}
    </Formik>
  );
};
export default LoginForm;
