import { Typography } from '@mui/material';
import GenericModal from './GenericModal';
import { GetModalUtils } from './GlobalModalManager';

const ConfirmationModal = ({ title, description, ...otherProps }) => {
  const body = <Typography>{description}</Typography>;
  return <GenericModal title={title} body={body} {...otherProps} />;
};
const { showModal: showConfirmationModal, hideModal: hideConfirmationModal } =
  GetModalUtils(ConfirmationModal);
export { showConfirmationModal, hideConfirmationModal };
