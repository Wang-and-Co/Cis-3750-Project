import { useNavigate } from 'react-router-dom';
import CreateEventForm from '../../shared-components/form/CreateEventForm/CreateEventForm';
import toast from 'react-hot-toast';
import sampleImage from '../../assets/sampleImage.png';
import { getFormattedFormPayload } from '../../shared-components/form/CreateEventForm/utils';
import useAsyncResponse from '../../shared-components/axios/useAsyncResponse';
import { postNewEvent } from '../../app/api/events';

const CreateEventPage = () => {
  const navigate = useNavigate();
  const { callAsyncFunctionPromise } = useAsyncResponse(postNewEvent);

  const handleSubmit = async (values, actions) => {
    getFormattedFormPayload(values);
    const payload = getFormattedFormPayload(values);
    // console.log('Payload!!!', payload);
    const { data, status } = await callAsyncFunctionPromise(payload); //TODO: navigate to the created event
    // console.log(data, status);
    if (status !== 200) {
      actions.setSubmitting(false);
      toast('Something went wrong. Please try again.');
      return;
    }

    actions.setSubmitting(false);
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
