import React, { useState } from "react";
import { AppBar, Toolbar, Button, Typography, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import { useTheme, useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))
  const [drawerOpen, setDrawerOpen] = useState(false)

  const navItems = [
    { label: "Home", to: "/#home" },
    { label: "About", to: "/#about" },
    { label: "Resume", to: "/#resume" },
    { label: "Projects", to: "/#projects" },
  ];

  return (
    <AppBar position="sticky" color="primary">
      <Toolbar>
        <Typography
          variant="h4"
          color="text.header"
          sx={{ flexGrow: 1, fontSize: { xs: "1.5rem", md: "2rem" } }}
        >
          Portfolio
        </Typography>

        {isMobile ? (
          <>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={() => setDrawerOpen(true)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
              <List sx={{ width: 250 }}>
                {navItems.map((item) => (
                  <ListItem button key={item.to} onClick={() => setDrawerOpen(false)}>
                    <HashLink to={item.to} smooth={true} duration={500} style={{ textDecoration: "none", color: "inherit" }}>
                      <ListItemText primary={item.label} />
                    </HashLink>
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </>
        ) : (
          <div>
            {navItems.map((item) => (
              <HashLink key={item.to} to={item.to} smooth={true} duration={500} style={{ textDecoration: "none" }}>
                <Button sx={{ color: theme.palette.text.header }}>{item.label}</Button>
              </HashLink>
            ))}
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
