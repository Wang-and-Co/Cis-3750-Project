import { Typography } from '@mui/material';

const ErrorPage = () => {
  return (
    <div>
      <Typography variant="h1" align="center" marginTop={'2rem'}>
        Error: 404
      </Typography>
      <Typography variant="h3" align="center">
        This isnt the page you were looking for
      </Typography>
    </div>
  );
};
export default ErrorPage;
