// src/components/Home.js
import React from "react";
import { Box, Typography } from "@mui/material";

const Home = () => {
  return (
    <Box
      id="home"
      sx={{
        minHeight: "100vh",
        backgroundColor: "background.default",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box textAlign="center">
        <Typography variant="h2" color="primary" sx={{ fontWeight: "bold" }}>
          Evan Fisher-Perez
        </Typography>
        <Typography variant="h4" color="text.primary" sx={{ mt: 1 }}>
          I'm a Software Engineer
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;
