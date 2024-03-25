import {
  Toolbar,
  Typography,
  AppBar,
  Box,
  Button,
  TextField,
  InputAdornment,
} from '@mui/material';
import { InputField } from '../form/InputField';
import { useCookies } from 'react-cookie';
import { Search } from '@mui/icons-material';

const NavBarTop = () => {
  const [cookies, setCookies, removeCookie] = useCookies(['auth']);
  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        boxShadow: 'none',
        backgroundColor: 'white',
        borderBottom: 1,
        borderColor: 'lightgray',
        height: '4rem',
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          height: '100%',
          paddingRight: 5,
        }}
      >
        <Button
          onClick={() => {
            console.log('Pressed!');
          }}
          sx={{ padding: 1, margin: 0, height: '100%', width: '15%' }}
        >
          <img
            src={'ComboLogo.png'}
            alt="ComBo Logo"
            style={{
              height: '100%',
              width: '100%',
              objectFit: 'contain',
            }}
          />
        </Button>
        <TextField
          id="search"
          placeholder="Search for an event..."
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
          sx={{
            flexGrow: 1,
          }}
        />
        {cookies.auth ? (
          <Button
            variant="contained"
            title="Log Out"
            sx={{ marginLeft: 1, height: '80%' }}
          >
            Log Out
          </Button>
        ) : (
          <>
            <Button
              variant="contained"
              title="Log In"
              sx={{ marginLeft: 1, height: '80%' }}
            >
              Log In
            </Button>
            <Button
              variant="contained"
              title="Sign Up"
              sx={{ marginLeft: 1, height: '80%' }}
            >
              Sign Up
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBarTop;
