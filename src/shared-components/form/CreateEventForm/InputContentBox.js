import { Box, Typography } from '@mui/material';
import { InputField } from '../InputField';
import { DatePickerField } from '../DatePickerField';

const inputField = { input: InputField, date: DatePickerField };

const InputContentBox = ({
  title,
  description,
  fieldProps,
  key,
  type = 'input',
}) => {
  const RenderedInputField = inputField[type];

  return (
    <Box
      key={key}
      display={'inline-flex'}
      flexDirection={'column'}
      gap={'0.5rem'}
    >
      <Typography variant="h4">{title}</Typography>
      <Typography variant="h5">{description}</Typography>
      <RenderedInputField {...fieldProps} />
    </Box>
  );
};
export default InputContentBox;
