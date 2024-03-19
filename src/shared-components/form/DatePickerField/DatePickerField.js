import DatePicker from 'react-datepicker';
import { useField } from 'formik';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import { forwardRef } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { CalendarMonth } from '@mui/icons-material';

const ExampleCustomInput = forwardRef(
  ({ value, name, onKeyDown, onClick, onFocus, ...otherProps }, ref) => {
    console.log(otherProps);
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
ExampleCustomInput.displayName = 'test';
const DatePickerField = ({ name, label, helperText, variant, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const consoleDebug = (value) => {
    console.log(value);
  };
  return (
    <DatePicker
      selected={field.value}
      {...field}
      variant={'filled'}
      onSelect={consoleDebug}
      {...props}
      name={{
        label: label,
        name: field.name,
        helperText: meta.touched && meta.error ? meta.error : helperText,
        error: !!meta.error && meta.touched,
        variant: variant,
      }}
      placeholder={helperText}
      title={label}
      customInput={<ExampleCustomInput />}
      onChange={(newDate) => helpers.setValue(newDate, true)}
    ></DatePicker>
  );
};
export default DatePickerField;
