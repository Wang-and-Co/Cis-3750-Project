import { Typography, Stack, Button, Dialog, Box } from '@mui/material';
import { PropTypes } from '@mui/material';
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

/**
 * @typedef GenericModalProps
 * @type {object}
 * @property {string} name
 * @property {string} title
 * @property {string} body
 * @property {string} id
 * @property {function} onClose
 * @property {boolean} open
 */

/**
 * A generic modal that should be a base for other modals
 * @param {GenericModalProps} props
 * @returns
 */
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
