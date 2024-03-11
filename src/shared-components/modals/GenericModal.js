import { Typography, Stack, Button, Dialog, Box } from '@mui/material';

const GenericModal = ({ name, title, body, id, onClose, open }) => (
  <Dialog name={name} open={open}>
    <Box>
      {title && <Typography id={`modal-${id}-title`}>{title}</Typography>}
      {body}
      <Stack spacing={2} direction="row">
        <Button variant="contained" onClick={onClose}>
          Close
        </Button>
      </Stack>
    </Box>
  </Dialog>
);
export default GenericModal;
