import { Form, Formik } from 'formik';
import { initialValues } from './utils';
import { getLoginFormValidationSchema } from './validations';
import { InputField } from '../InputField';
import { Button, Stack } from '@mui/material';

const LoginForm = ({ onSubmit }) => {
  const validationSchema = getLoginFormValidationSchema(); // get the validation schema from validations file
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(props) => (
        <Form>
          <Stack>
            <InputField name="name" label="Username" required></InputField>
            <InputField
              name="password"
              label="Password"
              required
              type="password"
            ></InputField>
            <Button onClick={props.submitForm} variant="contained">
              Login
            </Button>
          </Stack>
        </Form>
      )}
    </Formik>
  );
};
export default LoginForm;
