import { Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CreateEventForm from '../../shared-components/form/CreateEventForm/CreateEventForm';
import toast from 'react-hot-toast';
import sampleImage from '../../assets/sampleImage.png';

const CreateEventPage = () => {
  const navigate = useNavigate();
  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.setIsSubmitting(false);
    navigate('/hosting');
    toast('Event Successfully Posted');
  };
  return (
    <div
      style={{
        backgroundImage: `url(${sampleImage})`,
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        padding: '1rem',
      }}
    >
      <CreateEventForm handleSubmit={handleSubmit}></CreateEventForm>
    </div>
  );
};
export default CreateEventPage;
