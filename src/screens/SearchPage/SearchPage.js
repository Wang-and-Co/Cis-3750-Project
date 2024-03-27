import { Button, Typography } from '@mui/material';
import { useSearchParams } from 'react-router-dom';

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <div>
      <Typography variant="h1" align="center" marginTop={'2rem'}>
        Error: 404
      </Typography>
      <Typography variant="h3" align="center">
        {`Search Params: ${searchParams}`}
      </Typography>
      <Button onClick={() => setSearchParams({ name: 'roman' })}>test</Button>
    </div>
  );
};
export default SearchPage;
