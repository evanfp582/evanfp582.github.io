import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Unstable_Grid2";
import { IconButton } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import Separator from "../components/Separator"

const Image2Json = () => {
  return (<>
    <Box textAlign="center">
      <Typography variant="h1" color="primary" sx={{ fontWeight: "bold" }}>
          Image2Json 
      </Typography>
      <Separator width="50%"/>
    </Box>
    <Box sx={{ padding: "4rem" }}>
      <Typography variant="h3" color="secondary">Description</Typography>
      <Typography color="text.secondary" sx={{ mt: 1, mb:3, fontSize: "20px"}}>
        Honestly one my favorite projects I worked on and I see myself coming back to this project <br />
      </Typography>
      <Typography variant="h3" color="secondary">Tech</Typography>
      <Typography color="text.secondary" sx={{ mt: 1, mb:3, fontSize: "20px"}}>
        Tech
      </Typography>
      <Typography variant="h3" color="secondary">Dream</Typography>
      <Typography color="text.secondary" sx={{ mt: 1, mb:3, fontSize: "20px"}}>
        Dream
      </Typography>
    </Box>
    <Box sx={{ padding: "4rem" }}>
      <Typography variant="h2" textAlign="center" color="primary" sx={{ fontWeight: "bold" }}>
        Demo 
      </Typography>
      <Typography variant="h4" color="secondary">Mock Situation</Typography>
      <Typography color="text.secondary" sx={{ fontSize: "20px"}}>
        You want to add a whole bunch of cocktail recipes to a database <br />
        You do not want to manually input potentially thousands of recipes 
      </Typography>
      <Typography variant="h4" color="secondary">Gear Needed</Typography>
      <Typography color="text.secondary" sx={{ fontSize: "20px"}}>
        Just a cocktail recipe book and a camera
      </Typography>
    </Box>
    <Grid container spacing={2}>
      <Grid item xs={4} container justifyContent="center" alignItems="center">
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <img
           src="/images/original.jpg"
            alt="Original Input"
           style={{ width: '100%', height: 'auto' }}
         />
        </Box>
      </Grid>
      <Grid item xs={4} container justifyContent="center" alignItems="center">
        <IconButton>
          <ArrowForwardIcon fontSize="large" />
        </IconButton>
      </Grid>
      <Grid item xs={4} container justifyContent="center" alignItems="center">
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <img
            src="/images/input.PNG"
            alt="input"
            style={{ width: '100%', height: 'auto' }}
          />
        </Box>
      </Grid>
      <Grid item xs={4} container justifyContent="center" alignItems="center">
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <img
           src="/images/original.jpg"
            alt="Original Input"
           style={{ width: '100%', height: 'auto' }}
         />
        </Box>
      </Grid>
      <Grid item xs={4} container justifyContent="center" alignItems="center">
        <IconButton>
          <ArrowForwardIcon fontSize="large" />
        </IconButton>
      </Grid>
      <Grid item xs={4} container justifyContent="center" alignItems="center">
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <img
            src="/images/input.PNG"
            alt="input"
            style={{ width: '100%', height: 'auto' }}
          />
        </Box>
      </Grid>
    </Grid>
  </>)
}

export default Image2Json