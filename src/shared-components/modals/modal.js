import { Dialog, Button, DialogTitle, Typography } from '@mui/material';
import NiceModal, { useModal } from '@ebay/nice-modal-react';
const SampleModal = ({ name }) => {
  const modal = useModal();
  return (
    <Dialog name={name} open={modal.visible}>
      <DialogTitle>This is a sample Modal!</DialogTitle>
      <Typography id="modal-description" component={'h2'}>
        This is where a description would go
      </Typography>
      <Button variant="contained" onClick={() => modal.hide()}>
        Close
      </Button>
    </Dialog>
  );
};
export default NiceModal.create(SampleModal);
