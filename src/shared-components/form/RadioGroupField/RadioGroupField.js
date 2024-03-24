import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import { useField } from 'formik';

const RadioGroupField = ({ name, options, helperText }) => {
  const [field, meta] = useField(name);

  return (
    <FormControl sx={{ m: 3 }} error={!!meta.error} variant="standard">
      <RadioGroup aria-labelledby={`${name}-radios`} {...field}>
        {options?.map((option, index) => (
          <FormControlLabel
            value={option.value}
            control={<Radio />}
            label={option.label}
            key={index}
          />
        ))}
      </RadioGroup>
      <FormHelperText>{meta.error ?? helperText}</FormHelperText>
    </FormControl>
  );
};
export default RadioGroupField;
