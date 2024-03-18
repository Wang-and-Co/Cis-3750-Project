import { Button } from '@mui/material';

export const ModalButton = ({ modalOpener, ...props }) => {
  return (
    <Button onClick={() => modalOpener(props)}>Click me to Show Modal</Button>
  );
};
