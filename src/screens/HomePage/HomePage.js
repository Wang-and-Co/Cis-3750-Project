import { Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Typography variant="h1" align="center" marginTop={'2rem'}>
        Homepage
      </Typography>
      <Typography variant="h3" align="center">
        This is the homepage.
      </Typography>
      <Button onClick={() => navigate('/debug')}>Go to the Sample Page</Button>
    </div>
  );
};
export default HomePage;
