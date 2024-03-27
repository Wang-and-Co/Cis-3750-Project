import { Stack, Box, Typography, Button, Container } from '@mui/material';
import { Form, Formik } from 'formik';
import { getCreateEventValidationSchema } from './validations';
import {
  overviewProperties,
  otherInfoProperties,
  getInitialFormValues,
  participantLevelsProperties,
} from './utils';
import FileInputField from '../FileInputField/FileInputField';
import defaultImage from '../../../assets/sampleImage.png';
import InputContentBox from './InputContentBox';
import TimePickerField from '../TimePickerField/TimePickerField';
import InputAddressGrid from './InputAddressGrid';
import { ConnectedFocusError } from 'focus-formik-error';

const styles = {
  padding: '1rem',
  paddingLeft: '2rem',
  paddingRight: '2rem',
  border: 'black 1px solid',
  borderRadius: '12px',
  display: 'inline-flex',
  flexDirection: 'column',
  minWidth: '10rem',
  width: 'auto',
  gap: '0.5rem',
  marginBottom: '2rem',
};
const CreateEventForm = ({ handleSubmit }) => {
  const schema = getCreateEventValidationSchema();
  const initialValues = getInitialFormValues();
  return (
    <Container
      maxWidth="1rem"
      component="div"
      sx={(theme) => ({
        backgroundColor: theme.palette.background.default,

        maxWidth: '40rem',
        borderRadius: '10px',
        padding: '1rem',
        marginBottom: '10rem',
      })}
    >
      <Formik
        validationSchema={schema}
        initialValues={initialValues}
        validateOnBlur
        onSubmit={handleSubmit}
      >
        {(formikProps) => (
          <Form>
            <ConnectedFocusError />
            <Stack maxWidth="inherit" gap="0.5rem">
              <Typography variant="h2">Create Event</Typography>
              <FileInputField
                name="image"
                label={'Upload an image to represent your event!'}
                defaultImage={defaultImage}
              />
              <Box sx={styles} key="overview">
                <Typography variant="h3" marginBottom={'1rem'}>
                  Event Overview
                </Typography>
                {overviewProperties.map((values, index) => (
                  <InputContentBox {...values} key={index} />
                ))}
              </Box>
              <Box sx={styles} key="location">
                <Typography variant="h3" marginBottom={'1rem'}>
                  Time & Location
                </Typography>
                <Box display={'inline-flex'} flexDirection={'row'} gap="0.5rem">
                  <TimePickerField
                    name="startDateTime"
                    label="Starting Time"
                    required
                  ></TimePickerField>
                  <TimePickerField
                    name="endDateTime"
                    label="Ending Time"
                  ></TimePickerField>
                </Box>
                <InputContentBox
                  title="Event Date"
                  description="Enter the date your event will take place on"
                  fieldProps={{
                    name: 'eventDate',
                    label: 'Event Date',
                    required: true,
                  }}
                  type="date"
                />
                <Typography variant="h4">Address</Typography>
                <InputAddressGrid />
              </Box>
              <Box sx={styles} key="otherInfo">
                <Typography variant="h3">Other Info</Typography>
                {otherInfoProperties.map((values, index) => (
                  <InputContentBox {...values} key={index} />
                ))}
                <Typography variant="h4">Registration Numbers</Typography>

                <Stack direction="row" justifyContent="space-between">
                  {participantLevelsProperties.map((values, index) => (
                    <InputContentBox
                      {...values}
                      key={index}
                      boxSX={{ width: '15rem' }}
                    />
                  ))}
                </Stack>
              </Box>
              <Button
                onClick={formikProps.handleSubmit}
                disabled={formikProps.isSubmitting}
                variant="contained"
              >
                Create Event
              </Button>
            </Stack>
          </Form>
        )}
      </Formik>
    </Container>
  );
};
export default CreateEventForm;
