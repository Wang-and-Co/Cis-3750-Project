import DatePicker from 'react-datepicker';
import { useField } from 'formik';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import { forwardRef } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { CalendarMonth } from '@mui/icons-material';
import { isNaN } from 'formik';

// We need to make a forward ref to use this input within the date picker component
//https://stackoverflow.com/questions/74499549/time-is-set-automatically-if-selecting-date-in-react-datepicker
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
                <CalendarMonth></CalendarMonth>
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    );
  },
);
InnerMUIInputField.displayName = 'test';

const DatePickerField = ({ name, label, helperText, variant, ...props }) => {
  const [field, meta, helpers] = useField(name);

  return (
    <DatePicker
      selected={field.value ? new Date(field.value) : null}
      value={field.value ? field.value.toString() : undefined}
      {...field}
      variant={'filled'}
      onSelect={() => {}}
      {...props}
      name={{
        label: label,
        name: field.name,
        helperText: meta.touched && meta.error ? meta.error : helperText,
        error: !!meta.error && meta.touched,
        variant: variant,
      }}
      placeholderText="mm/dd/yyyy"
      customInput={<InnerMUIInputField />}
      onChange={(newDate) => helpers.setValue(newDate, true)}
      // onChangeRaw={field.onChange}
    ></DatePicker>
  );
};
export default DatePickerField;
