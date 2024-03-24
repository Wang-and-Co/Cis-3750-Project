import { fn } from '@storybook/test';
import { Formik } from 'formik';
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
import * as yup from 'yup';
import { ThemeProvider } from '@mui/material';
import { theme } from '../app/themeUtils';
import { RadioGroupField } from '../shared-components/form/RadioGroupField';

let validationSchem = yup.object({
  gender: yup.string().required('Enter a gender please'),
  password: yup.string().required('Enter a password'),
});
let initialValues = { name: '', password: '' };

export default {
  title: 'FORMIK/RadioGroupField',
  component: RadioGroupField,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Formik
          validationSchema={validationSchem}
          initialValues={initialValues}
        >
          <Story />
        </Formik>
      </ThemeProvider>
    ),
  ],
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    variant: {
      options: [undefined, 'standard', 'filled'],
    },
  },

  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn(), name: 'gender' },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    label: 'Name',
    options: [
      { label: 'Female', value: 'Female' },
      { label: 'Male', value: 'male' },
    ],
    helperText: 'This is helper text',
    required: true,
  },
};
