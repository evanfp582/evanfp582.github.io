// src/components/Resume.js
import React from "react";
import { Box, Typography } from "@mui/material";

const Resume = () => {
  return (
    <Box
      id="resume"
      sx={{
        minHeight: "100vh",
        backgroundColor: "background.secondary",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box textAlign="center">
        <Typography variant="h2" color="primary" sx={{ fontWeight: "bold" }}>
          My Resume
        </Typography>
        <Typography variant="h4" color="text.secondary" sx={{ mt: 2 }}>
          Details about my experience and skills
        </Typography>
      </Box>
    </Box>
  );
};

export default Resume;
