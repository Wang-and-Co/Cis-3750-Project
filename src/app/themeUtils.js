import { createTheme } from '@mui/material';
import { green } from '@mui/material/colors';
export const theme = createTheme({
  palette: {
    primary: green,
    volunteer: {
      main: '#87e1ff',
      light: '#87e1ff',
      dark: '#2c9cc2',
      contrast: '#000000',
    },
    attendee: {
      main: '#90ee90',
      light: '#90ee90',
      dark: '#33a133',
      contrast: '#000000',
    },
    host: {
      main: '#ff7dff',
      light: '#ff7dff',
      dark: '#ac2bac',
      contrast: '#000000',
    },
  },
});
