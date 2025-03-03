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
        // flexDirection: "column",
        alignItems: "center",
        gap: 3,
        mb: 2,
      }}
    >
      <img
          src="/images/headshot.JPG"
          alt="headshot"
          style={{ borderRadius: "50%", width: "300px", height: "300px", objectFit: "cover", border: "5px solid rgb(194, 42, 39)" }}
        />
      <Box 
        textAlign="center"
        sx={{
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <Typography variant="h1" color="primary" sx={{ fontWeight: "bold" }}>
          Evan Fisher-Perez
        </Typography>
        <Typography variant="h3" color="text.secondary" sx={{ mt: 0 }}>
          Software Engineer!
        </Typography>
        <Separator width="100%" />
        <Box sx={{ display: "flex", justifyContent: "center", gap: 12}}>
          <IconButton 
            href="https://github.com/evanfp582" 
            target="_blank" 
            sx={{ color: "text.secondary" }}
          >
          <GitHubIcon sx={{fontSize: "4rem"}} />
        </IconButton>
          <IconButton 
            href="mailto:your.evanfp582@example.com" 
            sx={{ color: "text.secondary"}}
          >
            <EmailIcon sx={{fontSize: "4rem"}} />
          </IconButton>
          <IconButton 
            href="tel:+5704607285" 
            sx={{ color: "text.secondary" }}
          >
            <PhoneIcon sx={{fontSize: "4rem"}} />
          </IconButton>
        </Box>
      </Box>
      
    </Box>
  );
};

export default Home;
