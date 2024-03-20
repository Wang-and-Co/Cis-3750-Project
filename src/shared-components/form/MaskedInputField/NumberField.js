import { useField } from 'formik';
import InputField from '../InputField/InputField';
import PropTypes from 'prop-types';

const NumberField = ({ name, maxLength = 120, ...otherProps }) => {
  const [field] = useField({ name: name });

  const sanitizeInput = (event) => {
    const newValue = event.target.value;
    //
    const matches = newValue.match(/-{0,1}[0-9]*\.{0,1}[0-9]*/);

    if (matches?.[0]?.localeCompare(newValue) === 0) {
      const components = newValue.match(/(-{0,1})([0-9]*)\.([0-9]*)/);
      const finalValue =
        components !== null && components[2] === ''
          ? components[1] + '0.' + components[3]
          : newValue;
      if (finalValue.length >= maxLength) return;
      event.target.value = finalValue;
      field.onChange(event);
    }
  };
  return (
    <InputField
      {...otherProps}
      name={name}
      onChange={sanitizeInput}
    ></InputField>
  );
};

NumberField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  helperText: PropTypes.string,
  required: PropTypes.bool,
  maxLength: PropTypes.number,
};
export default NumberField;
