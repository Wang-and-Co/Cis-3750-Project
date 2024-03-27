import { useLocation, useNavigate } from 'react-router-dom';
import CreateEventForm from '../../shared-components/form/CreateEventForm/CreateEventForm';
import toast from 'react-hot-toast';
import createEventBG from '../../assets/createEventBG.jpg';
import { getFormattedFormPayload } from '../../shared-components/form/CreateEventForm/utils';
import useAsyncResponse from '../../shared-components/axios/useAsyncResponse';
import { postNewEvent } from '../../app/api/events';
import useAuth from '../../shared-components/hooks/useAuth';
import { useEffect } from 'react';

const CreateEventPage = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();
  useEffect(() => {
    if (!isLoggedIn) {
      toast('You must be logged in to create an event!');
      navigate('/hosting');
    }
  }, [isLoggedIn]);
  const { callAsyncFunctionPromise } = useAsyncResponse(postNewEvent);

  const handleSubmit = async (values, actions) => {
    getFormattedFormPayload(values);
    const payload = getFormattedFormPayload(values);
    const { data, status } = await callAsyncFunctionPromise(payload); //TODO: navigate to the created event
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
        backgroundImage: `url(${createEventBG})`,
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
