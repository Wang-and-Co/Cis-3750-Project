import { useState } from 'react';
import { LoginForm } from '../form/LoginForm';
import { SignupForm } from '../form/SignupForm';
import GenericModal from './GenericModal';
import { GetModalUtils } from './GlobalModalManager';
import { createAccount, login } from '../../app/api/accounts';
import toast from 'react-hot-toast';
import { getResponseStatus } from '../../app/api/statusTypes';
import useAsyncResponse from '../axios/useAsyncResponse';

const LoginModal = ({ onSubmit, ...otherProps }) => {
  const [modalState, setModalState] = useState('Login');
  const { callAsyncFunctionPromise, isLoading } = useAsyncResponse(
    modalState === 'Login' ? login : createAccount,
  );

  const submissionHandler = async (values, actions) => {
    const { verifyPassword, ...formValues } = values;
    if (verifyPassword && values.password !== verifyPassword) {
      actions.setFieldError('verifyPassword', 'Password must match');
      actions.setSubmitting(false);
      return;
    }

    const { data, status } = await callAsyncFunctionPromise(formValues);
    actions.setSubmitting(false);
    if (status !== 200) {
      toast(getResponseStatus(status));
      return;
    }
    console.log(data);
    otherProps.onClose();
    onSubmit(data);
  };
  useAsyncResponse(
    modalState === 'Login' ? login : createAccount,
    submissionHandler,
  );

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
      footerOnClick={() => {
        setModalState('Login');
      }}
    ></SignupForm>
  );

  return (
    <GenericModal
      title={modalState}
      body={modalState === 'Login' ? loginBody : signupBody}
      showExitButton={true}
      disabled={isLoading}
      {...otherProps}
    />
  );
};

const { showModal: showLoginModal, hideModal: hideLoginModal } =
  GetModalUtils(LoginModal);

export { showLoginModal, hideLoginModal, LoginModal };
