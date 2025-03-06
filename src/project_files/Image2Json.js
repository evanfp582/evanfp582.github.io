import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"

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
  </>)
}

export default Image2Json