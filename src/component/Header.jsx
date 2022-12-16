import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import { Avatar } from '@mui/material';

export default function Header() {

  return (
    <Box sx={{ flexGrow: 1, marginBottom: '30px' }}>
      <AppBar position="static" sx={{ backgroundColor: '#750b0b', color: '#fcfffc' }}>
        <Toolbar>
          <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Avatar
              alt=" "
              src="/image1-never-exist"
              sx={{ width: 35, height: 35, backgroundColor: '#d9d9d9', borderRadius: '0px' }}
            />
            <Typography variant='h5' sx={{ ml: 2, mr: 2, fontWeight: '800' }}>
              Medical Darpan
            </Typography>
          </Box>
          <IconButton
            size="large"
            color="inherit"
            sx={{ borderRadius: '0px' }}
          >
            <Typography variant='body1' sx={{ ml: 4, mr: 1, fontWeight: '600' }}>
              Home
            </Typography>
          </IconButton>

          <IconButton
            size="large"
            color="inherit"
            sx={{ borderRadius: '0px' }}
          >
            <Typography variant='body1' sx={{ mr: 1, fontWeight: '600' }}>
              Products
            </Typography>
          </IconButton>

          <IconButton
            size="large"
            color="inherit"
            sx={{ borderRadius: '0px' }}
          >
            <Typography variant='body1' sx={{ mr: 1, fontWeight: '600' }}>
              Distributors
            </Typography>
          </IconButton>

          <IconButton
            size="large"
            color="inherit"
            sx={{ borderRadius: '0px' }}
          >
            <Typography variant='body1' sx={{ mr: 1, fontWeight: '600' }}>
              Manufacturers
            </Typography>
          </IconButton>

          <IconButton
            size="large"
            color="inherit"
            sx={{ borderRadius: '0px' }}
          >
            <Typography variant='body1' sx={{ mr: 1, fontWeight: '600' }}>
              About us
            </Typography>
          </IconButton>

          <IconButton
            size="large"
            color="inherit"
            sx={{ borderRadius: '0px' }}
          >
            <Typography variant='body1' sx={{ mr: 1, fontWeight: '600' }}>
              Blog
            </Typography>
          </IconButton>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton
              size="large"
              color="inherit"
              sx={{ borderRadius: '0px' }}
            >
              <Badge>
                <Typography variant='body1' sx={{ fontWeight: '600' }}>
                  Login
                </Typography>
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
            >
              <Avatar
                sx={{ width: 35, height: 35, backgroundColor: '#750b0b', border: '2px solid #fff' }}
              />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box >
  );
}