import { Typography, Stack, Button, Dialog, Box } from '@mui/material';
const style = {
  // position: 'absolute',
  top: '50%',
  left: '50%',
  // transform: 'translate(-50%, -50%)',
  width: 400,
  // bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const GenericModal = ({ name, title, body, id, onClose, open }) => (
  <Dialog name={name} open={open}>
    <Box sx={style}>
      {title && (
        <Typography id={`modal-${id}-title`} variant="h3">
          {title}
        </Typography>
      )}
      {body}
      <Stack spacing={2} direction="row-reverse">
        <Button variant="contained" onClick={onClose}>
          Close
        </Button>
      </Stack>
    </Box>
  </Dialog>
);
export default GenericModal;
