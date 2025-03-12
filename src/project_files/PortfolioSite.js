import { Box, Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { ThemeContext } from "../App";
import React, { useContext } from "react";
import ThemeChanger from "../components/ThemeChanger";

const PortfolioSite = () => {
  const { 
    setPrimaryColor, primaryColor, 
    setSecondaryColor, secondaryColor, 
    setTextColor, textColor, 
    setSecondaryTextColor, secondaryTextColor,
    setBackgroundColor, backgroundColor,
    setPaperColor, paperColor
  } = useContext(ThemeContext);

  return (
    <>
      <Box
        id="home"
        sx={{
          minHeight: "100vh",
          backgroundColor: "background.default",
          gap: 3,
          mb: 2,
          textAlign: "center",
          px: { xs: 2, md: 4 },
        }}
      >
        <Typography 
          variant="h3" 
          color="primary" 
          sx={{ fontWeight: "bold", fontSize: { xs: "1.8rem", md: "3rem" } }}
        >
          Portfolio Website 
        </Typography>
        <Typography 
          variant="h5" 
          color="text.secondary" 
          sx={{ fontSize: { xs: "1rem", md: "1.5rem" } }}
        >
          Called evanfp582.github.io
        </Typography>

        <Box sx={{ p: { xs: "1rem", md: "2rem" } }}>
          <Typography variant="h4" color="secondary" sx={{ fontSize: { xs: "1.5rem", md: "2rem" } }}>
            Design
          </Typography>
          <Typography color="text.secondary" sx={{ mt: 1, fontSize: { xs: "16px", md: "20px" } }}>
            For this site, I wanted to emphasize design and creating a website I'd be proud of. <br />
            I used tools like <a href="https://coolors.co/">Coolors</a> and <a href="https://zenoo.github.io/mui-theme-creator/">MUI Theme Creator</a> for visual appeal. <br />
            I chose red as the primary color because I like red, and orange to represent my alma mater, the RIT Tigers.
          </Typography>
        </Box>

        <Typography 
          variant="h4" 
          color="primary" 
          sx={{ mt: 4, fontWeight: "bold", fontSize: { xs: "1.5rem", md: "2rem" } }}
        >
          Try some color design yourself!
        </Typography>

        <Grid 
          container 
          spacing={2} 
          sx={{ 
            alignItems: "center", 
            justifyContent: "center", 
            margin: "auto",
            maxWidth: "900px",
            px: { xs: 2, md: 0 }
          }}
        >
          {[
            { setColor: setPrimaryColor, color: primaryColor, text: "Primary" },
            { setColor: setSecondaryColor, color: secondaryColor, text: "Secondary" },
            { setColor: setTextColor, color: textColor, text: "Navbar Text" },
            { setColor: setBackgroundColor, color: backgroundColor, text: "Background" },
            { setColor: setSecondaryTextColor, color: secondaryTextColor, text: "Body Text" },
            { setColor: setPaperColor, color: paperColor, text: "Paper" },
          ].map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Paper sx={{ p: 2 }}>
                <ThemeChanger setColor={item.setColor} color={item.color} text={item.text} />
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default PortfolioSite;
