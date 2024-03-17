import { Form, Formik } from 'formik';
import { initialValues } from './utils';
import { getLoginFormValidationSchema } from './validations';
import { InputField } from '../InputField';
import { Button, Stack } from '@mui/material';

const LoginForm = ({ onSuccess }) => {
  const validationSchema = getLoginFormValidationSchema(); // get the validation schema from validations file
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      validateOnChange={false}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          actions.setSubmitting(false);
          onSuccess(values);
        }, 1000);
      }}
    >
      {(props) => (
        <Form>
          <Stack spacing={1} sx={{ marginTop: '1.5rem' }}>
            <InputField
              name="name"
              label="Username"
              required
              autoComplete="name"
            ></InputField>
            <InputField
              name="password"
              label="Password"
              required
              type="password"
              autoComplete="current-password"
            ></InputField>
            <Button
              onClick={props.handleSubmit}
              variant="contained"
              disabled={props.isSubmitting}
            >
              Login
            </Button>
          </Stack>
        </Form>
      )}
    </Formik>
  );
};
export default LoginForm;
