import { createTheme } from '@mui/material';
import { green } from '@mui/material/colors';
export const theme = createTheme({
  palette: {
    primary: {
      main: '#26b170',
      light: '#26b170',
      dark: '#26905e',
      contrast: '#ffffff',
    },
    secondary: {
      main: '#97e9f5',
      light: '#97e9f5',
      dark: '#56b7c5',
      contrast: '#ffffff',
    },
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
