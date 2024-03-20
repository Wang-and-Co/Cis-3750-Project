import { useState } from 'react';
import { LoginForm } from '../form/LoginForm';
import { SignupForm } from '../form/SignupForm';
import GenericModal from './GenericModal';
import { GetModalUtils } from './GlobalModalManager';

const LoginModal = ({ onSubmit, ...otherProps }) => {
  const [modalState, setModalState] = useState('Login')
  
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
      footerOnClick={() => {setModalState('Sign up')}}  
    ></LoginForm>
  );

  const signupBody = (
    <SignupForm
      onSuccess={async (values) => {
        await onSubmit(values);
        otherProps.onClose()
        return;
      }}
      footerOnClick={() => {setModalState('Login')}}  
    ></SignupForm>
  )

  return <GenericModal title={modalState} body={modalState === 'Login' ? loginBody : signupBody} showExitButton={true} {...otherProps} />;
};

const { showModal: showLoginModal, hideModal: hideLoginModal } =
  GetModalUtils(LoginModal);

export { showLoginModal, hideLoginModal, LoginModal };
