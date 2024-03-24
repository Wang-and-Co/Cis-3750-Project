import { showConfirmationModal } from '../../shared-components/modals';
import toast from 'react-hot-toast';
import logo from './../../logo.svg';
import { Button, Stack } from '@mui/material';
import { useCookies } from 'react-cookie';
import { showLoginModal } from '../../shared-components/modals/LoginModal';
import { addBooking } from '../../app/api/events';
import { createAccount } from '../../app/api/accounts';
import React, { useState } from 'react';
import EventDescription from '../../shared-components/event-display/EventDescription';

const SamplePage = () => {
  const [cookies, setCookies, removeCookie] = useCookies(['auth']);
  const [isEventDescriptionOpen, setIsEventDescriptionOpen] = useState(false);

  const handleOpenDrawer = () => {
    setIsEventDescriptionOpen(true);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button
          variant="contained"
          onClick={() =>
            showConfirmationModal({
              title: 'among us alert!',
              description:
                'Raw men and maximum samuel and Ianiel Fridays and Man-sour and ET ham and Kirkland Foundations',
            })
          }
        >
          Show Modal
        </Button>
        <Button
          variant="contained"
          onClick={() =>
            createAccount({
              email: 'sussy@gmail.com',
              password: 'HiAll',
              fname: 'Daniel',
              lname: 'Wang',
            })
          }
        >
          add Booking
        </Button>
        <Button
          variant="contained"
          onClick={() => toast('Executed the entire population of gamers')}
        >
          test2
        </Button>
        <Stack>
          <Button
            variant="contained"
            onClick={() =>
              showLoginModal({
                onSubmit: (values) =>
                  setCookies('auth', { ...values, id: '123' }),
              })
            }
          >
            Login
          </Button>
          <Button onClick={() => removeCookie('auth')}>Logout</Button>
        </Stack>
        {cookies?.auth
          ? `Logged in. Cookies have: {email: ${cookies.auth.email}, password: ${cookies.auth.password}}`
          : 'not logged in'}
        {/* <Button
          onClick={() => {
            retrieveEvents(cookies, { type: 'text' });
          }}
        >
          Send Request
        </Button> */}
        <Button variant="contained" onClick={handleOpenDrawer}>
          Open Drawer
        </Button>
      </header>
    </div>
  );
};
export default SamplePage;
