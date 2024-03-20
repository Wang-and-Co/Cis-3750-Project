import { useState } from 'react';
import { LoginForm } from '../form/LoginForm';
import { SignupForm } from '../form/SignupForm';
import GenericModal from './GenericModal';
import { GetModalUtils } from './GlobalModalManager';
import { createAccount, login } from '../../app/api/accounts';
import toast from 'react-hot-toast';
import { getResponseStatus } from '../../app/api/statusTypes';

const LoginModal = ({ onSubmit, ...otherProps }) => {
  const [modalState, setModalState] = useState('Login');

  const submissionHandler = async (values, actions) => {
    const { verifyPassword, ...formValues } = values;
    if (verifyPassword && values.password !== verifyPassword) {
      actions.setFieldError('verifyPassword', 'Password must match');
      actions.setSubmitting(false);
      return;
    }

    const apiCall = modalState === 'Login' ? login : createAccount;
    const { data, status } = await apiCall(formValues);
    actions.setSubmitting(false);
    if (status !== 200) {
      toast(getResponseStatus(status));
      return;
    }
    console.log(data);
    otherProps.onClose();
    onSubmit(data);
  };

  const loginBody = (
    <LoginForm
      onSuccess={async (values) => {
        // console.log(values);
        //login here
        await onSubmit(values);
        // console.log('closing');
        otherProps.onClose();
        return;
      }}
      handleSubmit={submissionHandler}
      footerOnClick={() => {
        setModalState('Sign up');
      }}
    ></LoginForm>
  );

  const signupBody = (
    <SignupForm
      onSuccess={async (values) => {
        await onSubmit(values);
        otherProps.onClose();
        return;
      }}
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
      {...otherProps}
    />
  );
};

const { showModal: showLoginModal, hideModal: hideLoginModal } =
  GetModalUtils(LoginModal);

export { showLoginModal, hideLoginModal, LoginModal };
