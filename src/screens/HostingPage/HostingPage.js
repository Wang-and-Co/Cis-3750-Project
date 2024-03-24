import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const HostingPage = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <Typography variant="h1">Welcome to hosting page!</Typography>
      <Button onClick={() => navigate('./create', { relative: 'path' })}>
        Create an event
      </Button>
    </Box>
  );
};
export default HostingPage;
