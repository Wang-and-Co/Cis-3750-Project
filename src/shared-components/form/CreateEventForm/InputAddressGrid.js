import { Grid } from '@mui/material';
import GridInputField from './GridInputField';
import { locationTimeProperties } from './utils';

const InputAddressGrid = () => {
  return (
    <Grid container spacing={1} columnGap={'0.5rem'}>
      {locationTimeProperties.map((values, index) => (
        <GridInputField {...values} key={index}></GridInputField>
      ))}
    </Grid>
  );
};
export default InputAddressGrid;
