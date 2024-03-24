import { Grid } from '@mui/material';
import { InputField } from '../InputField';

const GridInputField = ({ fieldProps, spacing, key }) => {
  return (
    <Grid xs={spacing} key={key}>
      <InputField
        {...fieldProps}
        sx={(theme) => ({
          padding: theme.spacing(1),
          width: '100%',
          minHeight: '5rem',
        })}
      />
    </Grid>
  );
};
export default GridInputField;
