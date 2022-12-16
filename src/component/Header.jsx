import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

const pages = ['Home', 'Products', 'Distributors', 'Manufacturers', 'About', 'Blog'];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#750b0b', color: '#fcfffc', mb: 2 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Avatar
            alt=" "
            src="/image1-never-exist"
            sx={{
              width: 35,
              height: 35,
              backgroundColor: '#d9d9d9',
              borderRadius: '5px',
              display: { xs: 'none', md: 'flex' },
              mr: 1
            }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 800,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Medical Darpan
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' }
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu} >
                  <Typography textAlign="center" sx={{ fontWeight: '600' }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Avatar
            alt=" "
            src="/image1-never-exist"
            sx={{
              width: 35,
              height: 35,
              backgroundColor: '#d9d9d9',
              borderRadius: '5px',
              display: { xs: 'flex', md: 'none' },
              mr: 1
            }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Medical Darpan
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, ml: 3 }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block', fontWeight: '600', mr: 1 }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <IconButton
              size="large"
              color="inherit"
              sx={{ borderRadius: '0px' }}
            >
              <Typography variant='body1' sx={{ fontWeight: '600' }}>
                Login
              </Typography>
            </IconButton>
            <IconButton sx={{ ml: 1 }}>
              <Avatar
                sx={{ width: 35, height: 35, backgroundColor: '#750b0b', border: '2px solid #fff' }}
              />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;