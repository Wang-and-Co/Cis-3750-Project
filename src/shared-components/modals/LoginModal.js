import { LoginForm } from '../form/LoginForm';
import GenericModal from './GenericModal';
import { GetModalUtils } from './GlobalModalManager';

const LoginModal = ({ onSubmit, ...otherProps }) => {
  const body = (
    <LoginForm
      onSuccess={async (values) => {
        // console.log(values);
        //login here
        await onSubmit(values);
        // console.log('closing');
        otherProps.onClose();
        return;
      }}
    ></LoginForm>
  );
  return <GenericModal title={'Login'} body={body} {...otherProps} />;
};

const { showModal: showLoginModal, hideModal: hideLoginModal } =
  GetModalUtils(LoginModal);

export { showLoginModal, hideLoginModal, LoginModal };
