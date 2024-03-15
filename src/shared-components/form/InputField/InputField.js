import { TextField } from '@mui/material';
import { useField } from 'formik';
import PropTypes from 'prop-types';
const InputField = ({ name, label, required, variant, ...otherProps }) => {
  const [field, meta] = useField({ name });
  return (
    <TextField
      id={`input-${name}`}
      label={label}
      error={!!meta.error}
      helperText={meta.error}
      required={required}
      {...(variant ? { variant: variant } : {})}
      {...field}
      name={name}
      {...otherProps}
    ></TextField>
  );
};

InputField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.label,
  required: PropTypes.bool,
  variant: PropTypes.oneOf(['', 'filled', 'standard']),
};

export default InputField;
