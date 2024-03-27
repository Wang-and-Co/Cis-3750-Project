import { Box, Typography } from '@mui/material';
import { InputField } from '../InputField';
import { DatePickerField } from '../DatePickerField';
import RadioGroupField from '../RadioGroupField/RadioGroupField';
import NumberField from '../NumberField/NumberField';

const inputField = {
  input: InputField,
  date: DatePickerField,
  radio: RadioGroupField,
  number: NumberField,
};

const InputContentBox = ({
  title,
  description,
  fieldProps,
  key,
  type = 'input',
  boxSX,
}) => {
  const RenderedInputField = inputField[type];

  return (
    <Box
      key={key}
      display={'inline-flex'}
      flexDirection={'column'}
      gap={'0.5rem'}
      sx={boxSX}
    >
      <Typography variant="h5">{title}</Typography>
      <Typography variant="body">{description}</Typography>
      <RenderedInputField {...fieldProps} />
    </Box>
  );
};
export default InputContentBox;
