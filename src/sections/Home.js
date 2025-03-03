import React from "react";
import { Box, Typography, Link, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone"; // Import Phone Icon

import Separator from "../components/Separator";

const Home = () => {
  return (
    <Box
      id="home"
      sx={{
        minHeight: "100vh",
        backgroundColor: "background.default",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        gap: 3,
        mb: 4,
      }}
    >
      <img
          src="/images/headshot.JPG"
          alt="headshot"
          style={{ borderRadius: "50%", width: "250px", height: "250px", objectFit: "cover" }}
        />
      <Box textAlign="center">
        <Typography variant="h2" color="primary" sx={{ fontWeight: "bold" }}>
          Evan Fisher-Perez
        </Typography>
        <Typography variant="h4" color="text.secondary" sx={{ mt: 0 }}>
          Software Engineer!
        </Typography>
        <Separator width="100%" />
      </Box>
      <Box sx={{ mt: 0 }}>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 4 }}>
          <IconButton 
            href="https://github.com/evanfp582" 
            target="_blank" 
            sx={{ color: "secondary.main" }}
          >
          <GitHubIcon />
        </IconButton>
          {/* Email Link */}
          <IconButton 
            href="mailto:your.evanfp582@example.com" 
            sx={{ color: "secondary.main" }}
          >
            <EmailIcon />
          </IconButton>
          <IconButton href="tel:+5704607285" sx={{ color: "secondary.main" }}>
            <PhoneIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
