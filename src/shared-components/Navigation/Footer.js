import React from 'react';
import { AppBar, Toolbar, Typography, Link } from '@mui/material';
import { NAVBAR_LEFT_WIDTH_PERCENT } from '../../app/Layout';

const Footer = () => {

  return (
    <AppBar
      position="static"
      sx={{
        top: 'auto',
        bottom: 0,
        backgroundColor: 'primary',
        color: 'white',
        width: `${100 - NAVBAR_LEFT_WIDTH_PERCENT}%`,
        marginLeft: `${NAVBAR_LEFT_WIDTH_PERCENT}%`,
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="body1" component="div">
          &copy; {' '}
          <Link href="https://github.com/Wang-and-Co" color="inherit" underline="none">
              Wang & Co.
          </Link>
        </Typography>
        <div>
          <Link href="http://localhost:3000/legal/terms-of-service" color="inherit" underline="none" style={{ marginRight: 10 }}>
            Terms of Service & Privacy Policy
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;