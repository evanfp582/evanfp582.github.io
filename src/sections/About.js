import React from "react";
import { Box, Typography, Grid } from "@mui/material";

const About = () => {

  const yearSince2012= () => {
    const currentYear = new Date().getFullYear();
    return currentYear - 2012;
  }

  return (
    <Box
      id="about"
      sx={{
        minHeight: "100vh",
        backgroundColor: "background.default",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "2rem"
      }}
    >
      <Typography variant="h2" color="primary" sx={{ fontWeight: "bold", mb: 4 }}>
        About Me!
      </Typography>

      <Grid container spacing={2} sx={{ maxWidth: "80%", textAlign: "left" }}>
        <Grid item xs={12}>
          <Typography variant="h5" color="secondary" sx={{ fontWeight: "bold" }}>
            Background
          </Typography>
          <Typography color="text.secondary" sx={{ mt: 1, fontSize: "20px"}}>
            I am a Software Engineer that graduated from Rochester Institute of Technology in 2025.
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h5" color="secondary" sx={{ fontWeight: "bold" }}>
            Computer Science
          </Typography>
          <Typography color="text.secondary" sx={{ fontSize: "20px" }}>
            <span style={{ fontWeight: "bold" }}>Interests</span>:
            Web development, database management, AI, computer vision, low level programming, networking, developer operations, and general problem solving and learning!<br />
            <span style={{ fontWeight: "bold" }}>Language Experiences</span>:
            Python, Java, JavaScript, SQL, Kotlin, C, C++, MIPS Assembly, Rust, Matlab, and Smalltalk.<br />
            <span style={{ fontWeight: "bold" }}>Skill Experiences</span>:
            Git, ReactJS, Node, OpenCV, testing, MongoDB, SQL, AWS, HTML, CSS, Tesseract OCR, Tkinter, Angular, Vue, Axios, and Android Development.<br />
            <span style={{ fontWeight: "bold" }}>Next CS Topics to Learn</span>:
            In depth Rust, security, web hosting, networking, microprocessors, open source development, and using free AI models .<br />          
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h5" color="secondary" sx={{ fontWeight: "bold" }}>
            Hobbies
          </Typography>
          <Typography color="text.secondary" sx={{ fontSize: "20px" }}>
            Not CS related, but still very much a part of me <br />
            <span style={{ fontWeight: "bold" }}>Running</span>:
            I have been running distance for {yearSince2012()} years and counting. I was a member of RIT"s Cross Country, Indoor Track, and Outdoor Track varsity teams from 2020-2025. Running has been a large part of my life and I plan on continuing it with the goal of hitting a sub 3 hour marathon and racing in the NYC Marathon.<br />
            <span style={{ fontWeight: "bold" }}>Board Games</span>:
            I have an expansive board game collection that I love to play with friends. One of the best parts of going to college in Rochester NY, was being in close proximity to the best store of all time, Millennium Games.<br />
            <span style={{ fontWeight: "bold" }}>Reading</span>:
            My library is also something I am increasingly proud of as I build. Since the start of college I"ve gotten really into reading all the classics. The Jungle by Upton Sinclair and Lord of the Rings by J.R.R. Tolkien are among my favorite books.<br />
            <span style={{ fontWeight: "bold" }}>Video Games</span>:
            I would not be a proper CS student if I was not into video games. Video games have always been a good source of relaxation and stimulation. Games like Factorio, Dota, and Terraria are my favorites.<br />          
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
