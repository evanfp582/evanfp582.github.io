import { Box, Grid, Paper, Typography } from "@mui/material";
import { ThemeContext } from "../App"
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

  return(<>
    <Box
      id="home"
      sx={{
        minHeight: "100vh",
        backgroundColor: "background.default",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        gap: 3,
        mb: 2,
      }}
    >
      <Box textAlign="center">
        <Typography variant="h1" color="primary" sx={{ fontWeight: "bold" }}>
          Portfolio Website 
        </Typography>
        <Typography variant="h3" color="text.secondary">
          Called evanfp582.github.io
        </Typography>
      </Box>
      <Typography variant="h3" color="secondary">Design</Typography>
      <Typography color="text.secondary" sx={{ mt: 1, fontSize: "20px"}}>
        For this site, I wanted to emphasis design and making a cool looking website that I would be proud of <br />
        I used tools like <a href="https://coolors.co/">Coolors</a> and <a href="https://zenoo.github.io/mui-theme-creator/">MUI Theme Creator</a> to make visually appealing website <br />
        I went with Red as a the primary color because I like the color red. <br />
        I Used orange to show some pride to my alma mater, the RIT Tigers.
      </Typography>

      <Typography variant="h3" color="primary" sx={{ mt: 5 }}>
          Try some color design yourself!
        </Typography>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Paper>
            <ThemeChanger setColor={setPrimaryColor} color={primaryColor} text={"Primary"} />
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper>
            <ThemeChanger setColor={setSecondaryColor} color={secondaryColor} text={"Secondary"} />
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper>
            <ThemeChanger setColor={setTextColor} color={textColor} text={"Navbar Text"} />
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper>
            <ThemeChanger setColor={setBackgroundColor} color={backgroundColor} text={"Background"} />
          </Paper>
        </Grid>
      </Grid>


      <Grid container spacing={2} sx={{ mt: 5 }}>
        <Grid item xs={3}>
          <Paper>
            <ThemeChanger setColor={setSecondaryTextColor} color={secondaryTextColor} text={"Body Text"} />
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper>
            <ThemeChanger setColor={setPaperColor} color={secondaryColor} text={"Paper"} />
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper>
            <ThemeChanger setColor={setTextColor} color={textColor} text={"Empty"} />
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper>
            <ThemeChanger setColor={setBackgroundColor} color={backgroundColor} text={"Empty"} />
          </Paper>
        </Grid>
      </Grid>
    </Box>
    
  </>)
}

export default PortfolioSite