import React from "react";
import { Box, Typography, Button, Link } from "@mui/material";

const Resume = () => {
  return (
    <Box
      id="resume"
      sx={{
        minHeight: "100vh",
        backgroundColor: "background.default",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <Typography variant="h2" color="primary" sx={{ fontWeight: "bold", mb: 4 }}>
        My Resume!
      </Typography>

      <Box sx={{ width: "50%", height: "80vh", mb: 2, display: "flex", justifyContent: "center", }}>
        <embed
          src="/images/EvanFisherPerezResumeV1.pdf"
          type="application/pdf"
          width="100%"
          height="100%"
        />
      </Box>

      <Link
        href="/images/EvanFisherPerezResumeV1.pdf"
        download="EvanFisherPerez_Resume.pdf"
        sx={{
          textDecoration: "none",
          color: "secondary.main",
          fontSize: "1.2rem",
          display: "inline-block",
          mb: 4,
        }}
      >
        <Button variant="contained" color="secondary">
          Download Resume
        </Button>
      </Link>
    </Box>
  );
};

export default Resume;
