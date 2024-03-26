import { Box, Button, Typography, CardMedia} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import eventImage from '../../assets/guelph.jpg'
import community from '../../assets/community.jpg'

const HostingPage = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ textAlign: 'center', position: 'relative' }}>
      <CardMedia
        component="img"
        image={eventImage}
        style={{ width: '100%', height: '66vh', marginBottom: '2rem' }}
        alt="Event Image"
      />
      <Box>
        <Typography variant="h1">Welcome to the Hosting Page!</Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate('./create', { relative: 'path' })}
          sx={{margin: '2.2rem'}}
        >
          Create an Event
        </Button>
        <Typography variant="h4">
          A platform created for the local community of Guelph.
        </Typography>
        <CardMedia
          component="img"
          image={community}
          style={{ width: '100%', height: '66vh', marginTop: '2rem' }}
          alt="Event Image"
        />
      </Box>
    </Box>
  );
};
export default HostingPage;
