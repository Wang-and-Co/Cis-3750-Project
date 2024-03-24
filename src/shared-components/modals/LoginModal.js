import { useState } from 'react';
import { LoginForm } from '../form/LoginForm';
import { SignupForm } from '../form/SignupForm';
import GenericModal from './GenericModal';
import { GetModalUtils } from './GlobalModalManager';
import { createAccount, login } from '../../app/api/accounts';
import toast from 'react-hot-toast';
import { getResponseStatus } from '../../app/api/statusTypes';
import useAsyncResponse from '../axios/useAsyncResponse';

const LoginModal = ({ onSubmit, initalFormShown = 'Login', ...otherProps }) => {
  const [modalState, setModalState] = useState(initalFormShown);
  const { callAsyncFunctionPromise, isLoading } = useAsyncResponse(
    modalState === 'Login' ? login : createAccount,
  );

  const submissionHandler = async (values, actions) => {
    // eslint-disable-next-line no-unused-vars
    const { verifyPassword, ...formValues } = values;

    const { data, status } = await callAsyncFunctionPromise(formValues);
    actions.setSubmitting(false);
    if (status !== 200) {
      toast(getResponseStatus(status));
      return;
    }
    otherProps.onClose();
    onSubmit(data);
  };

  const loginBody = (
    <LoginForm
      handleSubmit={submissionHandler}
      footerOnClick={() => {
        setModalState('Sign up');
      }}
    ></LoginForm>
  );

  const signupBody = (
    <SignupForm
      handleSubmit={submissionHandler}
      footerOnClick={(event) => {
        setModalState('Login');
      }}
    ></SignupForm>
  );

  return (
    <GenericModal
      title={modalState}
      id={modalState}
      body={modalState === 'Login' ? loginBody : signupBody}
      showExitButton={true}
      disabled={isLoading}
      titleAlign={'center'}
      {...otherProps}
    />
  );
};

const { showModal: showLoginModal, hideModal: hideLoginModal } =
  GetModalUtils(LoginModal);

export { showLoginModal, hideLoginModal, LoginModal };
