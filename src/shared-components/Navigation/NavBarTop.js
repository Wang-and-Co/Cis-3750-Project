import { Toolbar, AppBar, Button, Stack } from '@mui/material';
import useAuth from '../hooks/useAuth';
import { showLoginModal } from '../modals/LoginModal';
import { NAVBAR_LEFT_WIDTH_PERCENT } from '../../app/Layout';
import {
  createSearchParams,
  useLocation,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';
import SearchInputField from './components/SearchInputField';
import { useEffect, useState } from 'react';

const NavBarTop = () => {
  const navigate = useNavigate();
  const { isLoggedIn, setAuthInfo, handleLogout } = useAuth();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const { pathname } = useLocation();

  useEffect(() => {
    pathname !== '/search'
      ? setSearchQuery('')
      : setSearchQuery(searchParams.name);
  }, [pathname, searchParams]);

  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        boxShadow: 'none',
        backgroundColor: 'white',
        borderBottom: 1,
        borderColor: 'darkestBlue.main',
        height: '4rem',
        bgcolor: 'lightestBlue.main',
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
            navigate('/');
          }}
          sx={{
            padding: 1,
            margin: 0,
            height: '100%',
            width: `${NAVBAR_LEFT_WIDTH_PERCENT}%`,
          }}
        >
          <img
            src={'/ComboLogo.png'}
            alt="ComBo Logo"
            style={{
              height: '100%',
              width: '100%',
              objectFit: 'contain',
            }}
          />
        </Button>
        <SearchInputField
          id="search"
          placeholder="Search for an event..."
          value={searchQuery}
          onSearch={(value) => {
            pathname !== '/search'
              ? navigate({
                  pathname: 'search',
                  search: createSearchParams({
                    name: value,
                  }).toString(),
                })
              : setSearchParams({ name: value });
          }}
        />

        {isLoggedIn ? (
          <Button
            variant="contained"
            title="Log Out"
            onClick={handleLogout}
            color="navBarButton"
            sx={{
              marginLeft: 'auto',
              border: '3px solid',
              borderColor: 'darkestBlue.main',
              borderRadius: 3,
            }}
          >
            Log Out
          </Button>
        ) : (
          <Stack direction="row" spacing={1} sx={{ marginLeft: 'auto' }}>
            <Button
              variant="contained"
              title="Log In"
              color="navBarButton"
              sx={{
                border: '3px solid',
                borderColor: 'darkestBlue.main',
                borderRadius: 3,
              }}
              onClick={() => {
                showLoginModal({
                  onSubmit: (values) => setAuthInfo({ id: '123', ...values }),
                  initalFormShown: 'Login',
                });
              }}
            >
              Log In
            </Button>
            <Button
              variant="contained"
              title="Sign Up"
              color="navBarButton"
              sx={{
                border: '3px solid',
                borderColor: 'darkestBlue.main',
                borderRadius: 3,
              }}
              onClick={() => {
                showLoginModal({
                  onSubmit: (values) => setAuthInfo({ id: '123', ...values }),
                  initalFormShown: 'Sign up',
                });
              }}
            >
              Sign Up
            </Button>
          </Stack>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBarTop;
