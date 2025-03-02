import React from "react";
import { Box, Typography } from "@mui/material";

const Projects = () => {
  return (
    <Box
      id="projects"
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
          My Projects
        </Typography>
        <Typography variant="h4" color="text.secondary" sx={{ mt: 2 }}>
          Check out my work here.
        </Typography>
      </Box>
    </Box>
  );
};

export default Projects;
