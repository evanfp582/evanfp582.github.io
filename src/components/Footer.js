import React from 'react';
import { Box, Typography, AppBar, Toolbar } from '@mui/material';

function Footer() {
  return (
    <AppBar position="static" color="primary" sx={{ top: 'auto', bottom: 0, mt: "20px" }}>
      <Toolbar>
        <Box sx={{ flexGrow: 1, textAlign: 'center' }}>
          <Typography variant="body1" color="text.header">
            © 2026 Evan Fisher-Perez's Portfolio Website
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Footer;