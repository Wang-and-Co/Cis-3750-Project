import { TextField, InputAdornment, IconButton } from '@mui/material';
import { useField, useFormikContext } from 'formik';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { VisibilityOff, Visibility } from '@mui/icons-material';
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
  type,
  ...otherProps
}) => {
  const { submitForm } = useFormikContext();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleKeyDownShowPassword = (event) => {
    if (event.key !== 'Enter') return;
    setShowPassword((show) => !show);
    event.preventDefault();
  };

  const iconAdnornments = (
    <InputAdornment position="end">
      <IconButton
        aria-label="toggle password visibility"
        onClick={handleClickShowPassword}
        onMouseDown={(event) => event.preventDefault()}
        onKeyDown={handleKeyDownShowPassword}
      >
        {showPassword ? <VisibilityOff /> : <Visibility />}
      </IconButton>
    </InputAdornment>
  );

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && event.target instanceof HTMLInputElement) {
      submitForm();
      event.preventDefault();
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
      type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
      InputProps={type === 'password' && { endAdornment: iconAdnornments }}
      {...otherProps}
    ></TextField>
  );
};

InputField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  helperText: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.string,
  variant: PropTypes.oneOf(['', 'filled', 'standard']),
};

export default InputField;
