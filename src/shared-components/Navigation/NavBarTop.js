import { Toolbar, Typography, AppBar, Box, Button } from '@mui/material';

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
        <Button
          onClick={() => {
            console.log('Pressed!');
          }}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/f7/No_Image_%282879926%29_-_The_Noun_Project.svg"
            alt="ComBo Logo"
          />
        </Button>
        <Typography variant="h6" noWrap component="div">
          Search bar goes here
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBarTop;
