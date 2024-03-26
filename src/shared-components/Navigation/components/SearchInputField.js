import { Search } from '@mui/icons-material';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import { useEffect, useState } from 'react';

const SearchInputField = ({ id, placeholder, onSearch, value }) => {
  const [searchValue, setSearchValue] = useState('');
  useEffect(() => {
    setSearchValue(value);
  }, [value]);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && event.target instanceof HTMLInputElement) {
      onSearch(searchValue);
      event.preventDefault();
    }
  };
  return (
    <TextField
      id={id}
      value={searchValue}
      placeholder={placeholder}
      variant="outlined"
      onKeyDown={handleKeyDown}
      onChange={(e) => setSearchValue(e.target.value)}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              type="button"
              sx={{ p: '10px' }}
              aria-label="search"
              onClick={() => onSearch(searchValue)}
            >
              <Search />
            </IconButton>
          </InputAdornment>
        ),
      }}
      sx={{
        width: '25%',
        marginLeft: 1,
      }}
    />
  );
};
export default SearchInputField;
