import { Typography } from '@mui/material';

const TextList = ({ header, body, id, index }) => {
  return (
    <>
      <Typography
        key={id}
        variant="h4"
        sx={(theme) => ({
          borderBottomWidth: '1px',
          borderBottomStyle: 'solid',
          borderBottomColor: theme.palette.divider,
          marginTop: '1rem',
          paddingBottom: '0.5rem',
        })}
      >{`${index}. ${header}`}</Typography>
      <Typography
        variant="p"
        sx={{ marginTop: '1.5rem', display: 'inline-block' }}
      >
        {body}
      </Typography>
    </>
  );
};
export default TextList;
