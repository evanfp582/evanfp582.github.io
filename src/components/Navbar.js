import React from "react";
import { AppBar, Toolbar, Button, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const theme = useTheme();

  return (
    <AppBar position="sticky" color="primary">
      <Toolbar>
        <Typography variant="h2" color="text.header" sx={{ flexGrow: 1 }}>
          Portfolio
        </Typography>
        <div>
          <HashLink to="/#home" smooth={true} duration={500}>
            <Button sx={{ color: theme.palette.text.header}}>Home</Button>
          </HashLink>
          <HashLink to="/#about" smooth={true} duration={500}>
            <Button sx={{ color: theme.palette.text.header}}>About</Button>
          </HashLink>
          <HashLink to="/#resume" smooth={true} duration={500}>
            <Button sx={{ color: theme.palette.text.header}}>Resume</Button>
          </HashLink>
          <HashLink to="/#projects" smooth={true} duration={500}>
            <Button sx={{ color: theme.palette.text.header}}>Projects</Button>
          </HashLink>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
