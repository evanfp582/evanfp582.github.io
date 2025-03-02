// src/components/Navbar.js
import React from "react";
import { AppBar, Toolbar, Button, Typography } from "@mui/material";
import { Link } from "react-scroll";
import { useTheme } from "@mui/material/styles"; // Import useTheme hook

const Navbar = () => {
  const theme = useTheme();

  return (
    <AppBar position="sticky" color="primary">
      <Toolbar>
        <Typography variant="h2" color="text.header" sx={{ flexGrow: 1 }}>
          My Portfolio
        </Typography>
        <div>
          <Link to="home" smooth={true} duration={500}>
            <Button sx={{ color: theme.palette.text.header}}>Home</Button>
          </Link>
          <Link to="resume" smooth={true} duration={500}>
            <Button sx={{ color: theme.palette.text.header}}>Resume</Button>
          </Link>
          <Link to="projects" smooth={true} duration={500}>
            <Button sx={{ color: theme.palette.text.header}}>Projects</Button>
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
