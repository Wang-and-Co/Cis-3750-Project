import { Toolbar, Typography, AppBar } from '@mui/material';

const NavBarTop = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        boxShadow: 'none',
        backgroundColor: 'white',
        borderBottom: 1,
        borderColor: 'lightgray',
      }}
    >
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          Search bar goes here
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBarTop;
