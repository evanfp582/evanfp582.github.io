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
        px: 2,
      }}
    >
      <Typography
        variant="h2"
        color="primary"
        sx={{
          fontWeight: "bold",
          mb: 3,
          fontSize: { xs: "2rem", md: "3rem" },
        }}
      >
        My Resume!
      </Typography>

      <Box
        sx={{
          width: { xs: "90%", md: "50%" },
          height: { xs: "60vh", md: "80vh" },
          mb: 2,
          display: "flex",
          justifyContent: "center",
          border: "1px solid gray",
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
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
          mb: 4,
        }}
      >
        <Button
          variant="contained"
          color="secondary"
          sx={{
            fontSize: { xs: "1rem", md: "1.2rem" },
            px: { xs: 2, md: 4 },
          }}
        >
          Download Resume
        </Button>
      </Link>
    </Box>
  );
};

export default Resume;
