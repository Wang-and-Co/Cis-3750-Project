import { Stack, Box, Typography } from '@mui/material';
import { Form, Formik } from 'formik';
import { InputField } from '../InputField';
import { getCreateEventValidationSchema } from './validations';
import {
  overviewProperties,
  locationTimeProperties,
  getInitialFormValues,
} from './utils';
import FileInputField from '../FileInputField/FileInputField';
import defaultImage from '../../../assets/leSus.png';
import InputContentBox from './InputContentBox';
import TimePickerField from '../TimePickerField/TimePickerField';
import InputAddressGrid from './InputAddressGrid';

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
const CreateEventForm = () => {
  const schema = getCreateEventValidationSchema();
  const initialValues = getInitialFormValues();
  return (
    <Formik
      validationSchema={schema}
      initialValues={initialValues}
      validateOnBlur
    >
      <Form>
        <Stack>
          <FileInputField
            name={'test'}
            label={'input file'}
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
          <Box sx={styles}>
            <Typography variant="h3">Other Info</Typography>
          </Box>
        </Stack>
      </Form>
    </Formik>
  );
};
export default CreateEventForm;
