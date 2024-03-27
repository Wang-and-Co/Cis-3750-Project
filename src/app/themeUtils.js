import { createTheme } from '@mui/material';

const lightestBlue = {
  main: '#97e7f5',
  light: '#c4f5fd',
  dark: '#51c4d8',
  contrastText: '#000000',
};

const mediumBlue = {
  main: '#009dd1',
  light: '#34abd3',
  dark: '#007ba4',
  contrastText: '#ffffff',
};

const darkestBlue = {
  main: '#01377d',
  light: '#244a7d',
  dark: '#00295e',
  contrastText: '#ffffff',
};

const lightestGreen = {
  main: '#7ed348',
  light: '#97d272',
  dark: '#67b438',
  contrastText: '#ffffff',
};

const mediumGreen = {
  main: '#26b170',
  light: '#52b486',
  dark: '#26905e',
  contrastText: '#ffffff',
};

const backgroundColour = {
  main: '#fff',
  light: '#fff',
  dark: '#97d272',
  contrastText: darkestBlue.dark,
};

export const theme = createTheme({
  palette: {
    primary: darkestBlue,
    navBarButton: backgroundColour,
    lightestBlue: lightestBlue,
    mediumBlue: mediumBlue,
    darkestBlue: darkestBlue,
    lightestGreen: lightestGreen,
    mediumGreen: mediumGreen,
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
  typography: {
    fontFamily: ['-apple-system', 'BlinkMacSystemFont', '"Kanit"'].join(','),
  },
});
