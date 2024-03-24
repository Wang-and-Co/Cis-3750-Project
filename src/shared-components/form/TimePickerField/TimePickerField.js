import { forwardRef, useState } from 'react';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import { AccessTime } from '@mui/icons-material';
import DatePicker from 'react-datepicker';
import { useField } from 'formik';

const InnerMUIInputField = forwardRef(
  ({ value, name, onKeyDown, onClick, onFocus, ...otherProps }, ref) => {
    return (
      <TextField
        value={value}
        ref={ref}
        {...name}
        {...otherProps}
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
InnerMUIInputField.displayName = 'test';
const TimePickerField = (name, label, helperText, variant, ...props) => {
  const [field, meta, helpers] = useField(name);

  return (
    <DatePicker
      selected={field.value ? new Date(field.value) : null}
      value={field.value ? field.value.toString() : undefined}
      {...field}
      onSelect={() => {}}
      {...props}
      onChange={(newDate) => helpers.setValue(newDate, true)}
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
    />
  );
};
export default TimePickerField;
