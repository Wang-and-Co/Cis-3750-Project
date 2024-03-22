import { Box, CircularProgress } from '@mui/material';
import GenericModal from './GenericModal';
import { GetModalUtils } from './GlobalModalManager';

const ProgressModal = ({ onClose, ...otherProps }) => {
  const body = (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '1.5rem',
        marginBottom: '1.5rem',
      }}
    >
      <CircularProgress />
    </Box>
  );
  return (
    <GenericModal
      body={body}
      onClose={onClose}
      {...otherProps}
      hideExitButton
    />
  );
};

const { showModal: showProgressModal, hideModal: hideProgressModal } =
  GetModalUtils(ProgressModal);
export { showProgressModal, hideProgressModal };
