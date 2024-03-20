import { Button, Stack, Typography } from '@mui/material';
import GenericModal from './GenericModal';
import { GetModalUtils } from './GlobalModalManager';

const ConfirmationModal = ({ title, description, onClose, ...otherProps }) => {
  const body = (
    <>
      <Typography>{description}</Typography>
      <Stack spacing={2} direction="row-reverse">
        <Button variant="contained" onClick={onClose}>
          Close
        </Button>
      </Stack>
    </>
  );
  return (
    <GenericModal
      title={title}
      body={body}
      onClose={onClose}
      {...otherProps}
      hideExitButton
    />
  );
};

const { showModal: showConfirmationModal, hideModal: hideConfirmationModal } =
  GetModalUtils(ConfirmationModal);
export { showConfirmationModal, hideConfirmationModal };
