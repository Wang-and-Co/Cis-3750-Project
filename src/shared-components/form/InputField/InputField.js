import { TextField } from '@mui/material';
import { useField } from 'formik';
import PropTypes from 'prop-types';
const InputField = ({
  name,
  label,
  helperText,
  required,
  variant,
  ...otherProps
}) => {
  const [field, meta] = useField({ name });
  return (
    <TextField
      id={`input-${name}`}
      label={label}
      error={!!meta.error && meta.touched}
      helperText={meta.touched && meta.error ? meta.error : helperText}
      required={required}
      {...(variant ? { variant: variant } : {})}
      {...field}
      name={name}
      sx={{ minHeight: '5rem' }}
      {...otherProps}
    ></TextField>
  );
};

InputField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  helperText: PropTypes.string,
  required: PropTypes.bool,
  variant: PropTypes.oneOf(['', 'filled', 'standard']),
};

export default InputField;
