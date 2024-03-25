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
    lightestBlue: {
      main: '#97e7f5',
      light: '#c4f5fd',
      dark: '#51c4d8',
      contrast: '#000000',
    },
    mediumBlue: {
      main: '#009dd1',
      light: '#34abd3',
      dark: '#007ba4',
      contrast: '#ffffff',
    },
    darkestBlue: {
      main: '#01377d',
      light: '#244a7d',
      dark: '#00295e',
      contrast: '#ffffff',
    },
    lightestGreen: {
      main: '#7ed348',
      light: '#97d272',
      dark: '#67b438',
      contrast: '#ffffff',
    },
    mediumGreen: {
      main: '#26b170',
      light: '#52b486',
      dark: '#26905e',
      contrast: '#ffffff',
    },
    volunteer: {
      main: '#87e1ff',
      light: '#b3ecff',
      dark: '#2c9cc2',
      contrastText: '#000000',
    },
    attendee: {
      main: '#90ee90',
      light: '#aeeeae',
      dark: '#33a133',
      contrastText: '#000000',
    },
    host: {
      main: '#ff7dff',
      light: '#ffaeff',
      dark: '#ac2bac',
      contrastText: '#000000',
    },
  },
});
