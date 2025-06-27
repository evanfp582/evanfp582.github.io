import { useState } from "react";
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";

import Separator from "../components/Separator"

const bodyStyle = { fontSize: { xs: "1rem", md: "1.25rem" }, textAlign: "justify" }
const h1Style = { fontWeight: "bold", fontSize: { xs: "3.5rem", md: "5.5rem" } }
const paddingLeftStyle = { px: { xs: 3, sm: 6, md: 10 }, py: 4 }


const Homebase = () => {
  return<>
    <Box textAlign="center" sx={paddingLeftStyle}>
      <Typography color="primary" sx={h1Style}>
          Project Homebase 
      </Typography>
      <Separator width="50%"/>
    </Box>
    <Box sx={paddingLeftStyle}>
      <Typography variant="h3" color="secondary">Description</Typography>
      <Typography color="text.secondary" sx={bodyStyle}>
        I had my old PC from 2010 just collecting dust at home so I decided to turn it into a linux server. <br />
        On this local linux server I planned to teach myself hosting, linux, scripting, and more! <br />
        But the most important aspect of this project was I wanted to reignite a passion I have for developing <br />
        I want to write code that will be fun, useful (to myself, but hopefully others one day), and unique! <br />
        Below are some projects that I am working on or have ideas for! <br />

      </Typography>
      <Typography variant="h3" color="secondary">Tech</Typography>
      <Typography color="text.secondary" sx={bodyStyle}>
        Used a whole bunch of technologies and new things depending on the project! <br />
        <Typography color="primary" variant="h4">Project "Evan Images" </Typography>
        Google has been telling me that I have used 99% of the available storage for a while <br />
        So I took my largest photos, downloaded them to the linux server, 
        put them in a GridFS Mongo Database, and access them via a React frontend. <br /> 
        Photo Frontend- React, MUI, <br />
        Photo Backend- Node, Express, (Mongo DB GridFS to be specific)<br />
        
        <Typography color="primary" variant="h4">Project "Dashboard" </Typography>
        Python and shell scripts <br />

        <Typography color="primary" variant="h4"> Project "Fast Food Menu" </Typography>
        Project to show food that is in my fridge like a digital fast food menu
        TBD <br />

        <Typography color="primary" variant="h4"> Project  "Evan Calendar" </Typography>
        Project to serve as a google calendar
        TBD <br />
      </Typography>
      <Typography variant="h3" color="secondary">
        The Future
      </Typography>
      <Typography color="text.secondary" sx={bodyStyle}>
        I want to do the TBD projects and think of more to do! <br />
        I also want to make interactive demos for each of the projects here <br />
      </Typography>
    </Box>
  </>
}

export default Homebase