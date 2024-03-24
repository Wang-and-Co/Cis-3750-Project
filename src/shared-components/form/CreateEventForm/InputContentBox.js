import { Box, Typography } from '@mui/material';
import { InputField } from '../InputField';

const InputContentBox = ({ title, description, inputFieldProps }) => {
  return (
    <Box display={'inline-flex'} flexDirection={'column'} gap={'0.5rem'}>
      <Typography variant="h4">{title}</Typography>
      <Typography variant="h5">{description}</Typography>
      <InputField {...inputFieldProps} />
    </Box>
  );
};
export default InputContentBox;
