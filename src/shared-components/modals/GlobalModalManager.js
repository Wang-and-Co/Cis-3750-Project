import NiceModal, { useModal } from '@ebay/nice-modal-react';
const ModalWrapper = (ModalComponent) => {
  const ModalizedComponent = (props) => {
    const { visible, hide } = useModal();
    return (
      <ModalComponent {...props} onClose={hide} open={visible}></ModalComponent>
    );
  };
  return NiceModal.create((props) => (
    <ModalizedComponent {...props}></ModalizedComponent>
  ));
};

const GetModalUtils = (component) => {
  const WrappedModal = ModalWrapper(component);
  return {
    showModal: (props) => NiceModal.show(WrappedModal, props),
    hideModal: () => NiceModal.hide(WrappedModal),
  };
};
export { GetModalUtils };
