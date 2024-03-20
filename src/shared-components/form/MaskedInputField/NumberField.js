import { useField } from 'formik';
import InputField from '../InputField/InputField';

const NumberField = ({ name, ...otherProps }) => {
  const [field] = useField({ name: name });

  const sanitizeInput = (event) => {
    const newValue = event.target.value;
    //
    const matches = newValue.match(/-{0,1}[0-9]*\.{0,1}[0-9]*/);
    if (matches?.[0]?.localeCompare(newValue) === 0) {
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
export default NumberField;
