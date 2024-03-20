import { useField } from 'formik';
import InputField from '../InputField/InputField';
import PropTypes from 'prop-types';

const NumberField = ({ name, maxLength = 120, ...otherProps }) => {
  const [field] = useField({ name: name });

  // intercept the onChange, handle updating the text here
  const sanitizeInput = (event) => {
    const newValue = event.target.value;
    const matches = newValue.match(/-{0,1}[0-9]*\.{0,1}[0-9]*/); //format of

    if (matches?.[0]?.localeCompare(newValue) !== 0) return;

    const numberSections = newValue.match(/(-{0,1})([0-9]*)\.([0-9]*)/);
    const finalValue =
      numberSections !== null && numberSections[2] === ''
        ? numberSections[1] + '0.' + numberSections[3]
        : newValue;

    if (finalValue.length >= maxLength) return;

    event.target.value = finalValue;
    field.onChange(event);
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
