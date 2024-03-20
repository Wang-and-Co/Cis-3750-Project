import { Clear } from '@mui/icons-material';
import { Typography, Dialog, Box, IconButton } from '@mui/material';
const style = {
  top: '50%',
  left: '50%',
  // transform: 'translate(-50%, -50%)',
  width: 400,
  // bgcolor: 'background.paper',
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
 * @property {boolean} showExitButton
 * @property {boolean} disabled
 */

/**
 * A generic modal that should be a base for other modals
 * @param {GenericModalProps} props
 * @type {import('react').FC<GenericModalProps>}
 */
const GenericModal = ({
  name,
  title,
  body,
  onClose,
  showExitButton,
  id,
  open,
  disabled,
  titleAlign,
}) => (
  <Dialog name={name} open={open}>
    <Box sx={style}>
      {showExitButton && (
        <IconButton
          sx={{
            position: 'absolute',
            display: 'block',
            right: '1rem',
            top: '10px',
            height: '2.5rem',
            width: '2.5rem',
          }}
          aria-label="close"
          onClick={onClose}
          disabled={disabled}
        >
          <Clear />
        </IconButton>
      )}
      {title && (
        <Typography id={`modal-${id}-title`} align={titleAlign} variant="h3">
          {title}
        </Typography>
      )}
      <Box sx={{ marginTop: '1.5rem' }}>{body}</Box>
    </Box>
  </Dialog>
);

export default GenericModal;
