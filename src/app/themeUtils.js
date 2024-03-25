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
    background: {
      main: '#97e7f5',
      light: '#97e7f5',
      dark: '#51c4d8',
      contrast: '#000000',
    },
    topNavBar: {
      main: '#009dd1',
      light: '#009dd1',
      dark: '#007ba4',
      contrast: '#ffffff',
    },
    leftNavBar: {
      main: '#7ed348',
      light: '#7ed348',
      dark: '#67b438',
      contrast: '#ffffff',
    },
    volunteer: {
      main: '#87e1ff',
      light: '#87e1ff',
      dark: '#2c9cc2',
      contrastText: '#000000',
    },
    attendee: {
      main: '#90ee90',
      light: '#90ee90',
      dark: '#33a133',
      contrastText: '#000000',
    },
    host: {
      main: '#ff7dff',
      light: '#ff7dff',
      dark: '#ac2bac',
      contrastText: '#000000',
    },
  },
});
