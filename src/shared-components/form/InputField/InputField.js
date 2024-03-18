import { TextField } from '@mui/material';
import { useField, useFormikContext } from 'formik';
import PropTypes from 'prop-types';
/**
 * @typedef {Object} InputFieldProps
 * @property {string} name Name of field corresponding in formik context
 * @property {string} label The text that will appear visually as the field's label
 * @property {string} helperText The default helpertext to show when there are no errors
 * @property {boolean} required Visual indicator for required fields
 * @property {string} variant MUI variant tag
 */

/**
 * A single input field for a formik form. Aside from the defined props, all TextField props will apply as usual
 * @param {InputFieldProps} props - {@link InputFieldProps} object
 * @type {React.FC<InputFieldProps>}
 *
 * @inner MUI TextField is used as the actual form component
 */
const InputField = ({
  name,
  label,
  helperText,
  required,
  variant,
  ...otherProps
}) => {
  const { submitForm } = useFormikContext();

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      submitForm();
    }
  };
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
      onKeyDown={handleKeyDown}
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
