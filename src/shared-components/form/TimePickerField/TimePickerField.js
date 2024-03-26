import { forwardRef } from 'react';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import { AccessTime } from '@mui/icons-material';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { useField } from 'formik';

const InnerMUIInputField = forwardRef(
  (
    // eslint-disable-next-line no-unused-vars
    { value, name, onKeyDown, onClick, onFocus, sx = {}, ...otherProps },
    ref,
  ) => {
    return (
      <TextField
        value={value}
        ref={ref}
        {...name}
        {...otherProps}
        sx={{ minHeight: '5rem', ...sx }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={onFocus} onKeyDown={onKeyDown}>
                <AccessTime />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    );
  },
);
InnerMUIInputField.displayName = 'test2';

const TimePickerField = ({ name, label, helperText, variant, ...props }) => {
  const [field, meta, helpers] = useField(name);

  return (
    <DatePicker
      selected={field.value ? new Date(field.value) : null}
      value={field.value ? field.value.toString() : undefined}
      {...field}
      variant={'filled'}
      onSelect={() => {}}
      {...props}
      customInput={<InnerMUIInputField />}
      name={{
        label: label,
        name: field.name,
        helperText: meta.touched && meta.error ? meta.error : helperText,
        error: !!meta.error && meta.touched,
        variant: variant,
      }}
      showTimeSelect
      showTimeSelectOnly
      timeIntervals={15}
      timeCaption="Time"
      dateFormat="h:mm aa"
      onChange={(newDate) => helpers.setValue(newDate, true)}
    />
  );
};
export default TimePickerField;
