import React from "react";
import { Box, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import BubbleText from "../components/bubble_text/BubbleText"
import Separator from "../components/Separator";

const Home = () => {
  return (
    <Box
      id="home"
      sx={{
        minHeight: "100vh",
        backgroundColor: "background.default",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "center",
        alignItems: "center",
        gap: { xs: 2, md: 3 },
        mb: 2,
        textAlign: "center",
      }}
      className="p-4"
    >
      <motion.img
        initial={{y:25, opacity:0}}
        animate={{y:0, opacity:1}}
        transition={{duration:1, ease:"easeInOut"}}
        src="/images/headshot.JPG"
        alt="headshot"
        className="rounded-full border-4 border-red-600 object-cover"
        style={{
          width: "100%",
          maxWidth: "300px",
          height: "auto",
        }}
      />
      <motion.div
        initial={{y:25, opacity:0}}
        animate={{y:0, opacity:1}}
        transition={{duration:1, ease:"easeInOut"}}
      >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <BubbleText />
        <Separator width="100%" />
        <Box sx={{ display: "flex", justifyContent: "center", gap: { xs: 3, md: 12 }, mt: 2 }}>
          <IconButton 
            href="https://github.com/evanfp582" 
            target="_blank" 
            sx={{ color: "text.secondary" }}
          >
            <GitHubIcon sx={{ fontSize: { xs: "2.5rem", md: "4rem" } }} />
          </IconButton>
          <IconButton 
            href="https://www.linkedin.com/in/evan-fisher-perez/" 
            target="_blank" 
            sx={{ color: "text.secondary" }}
          >
            <LinkedInIcon sx={{ fontSize: { xs: "2.5rem", md: "4rem" } }} />
          </IconButton>
          <IconButton 
            href="mailto:your.evanfp582@gmail.com" 
            sx={{ color: "text.secondary"}}
          >
            <EmailIcon sx={{ fontSize: { xs: "2.5rem", md: "4rem" } }} />
          </IconButton>
          <IconButton 
            href="tel:+5704607285" 
            sx={{ color: "text.secondary" }}
          >
            <PhoneIcon sx={{ fontSize: { xs: "2.5rem", md: "4rem" } }} />
          </IconButton>
        </Box>
      </Box>
      </motion.div>
      
      
    </Box>
  );
};

export default Home;
