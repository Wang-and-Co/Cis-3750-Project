import { Form, Formik } from 'formik';
import { initialValues } from './utils';
import { getLoginFormValidationSchema } from './validations';
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
const SignupForm = ({ onSuccess, footerOnClick }) => {
    const validationSchema = getLoginFormValidationSchema();

    return(
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            validateOnChange={true}
            onSubmit={(values, actions) => {
                setTimeout(() => {
                  actions.setSubmitting(false);
                  onSuccess(values);
                }, 1000);
              }}
        >
            {(formikProps) => (
                <Form>
                    <Stack spacing={1} sx={{ marginTop: '1.5rem' }}>
                        <InputField
                            name='email'
                            label='Email'
                            required
                            autoComplete='email'
                        ></InputField>
                        <InputField
                            name='password'
                            label='Password'
                            required
                            autoComplete='current-password'
                        ></InputField>
                        <InputField
                            name='verifyPassword'
                            label='Verify Password'
                            required
                            autoComplete='current-password'
                        ></InputField>
                        <InputField
                            name='firstName'
                            label='First Name'
                            required
                            autoComplete=''
                        ></InputField>
                        <InputField
                            name='lastName'
                            label='Last Name'
                            required
                            autoComplete=''
                        ></InputField>
                        <Button
                            onClick={formikProps.handleSubmit}
                            variant='contained'
                            disabled={formikProps.isSubmitting}
                        >
                            Sign Up
                        </Button>
                        <div style={{display: 'flex'}}>
                            <Typography inline variant={'subtitle2'}>Already have an account?&nbsp;</Typography>
                            <Link inline variant={'subtitle2'} onClick={footerOnClick}>Sign in</Link>
                        </div>
                    </Stack>
                </Form>
            )}
        </Formik>
    )
}
export default SignupForm;
