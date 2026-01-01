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


const KotlinTUI = () => {
  return<>
    <Box textAlign="center" sx={paddingLeftStyle}>
      <Typography color="primary" sx={h1Style}>
          KotlinTUI
      </Typography>
      <Separator width="50%"/>
    </Box>
    <Box sx={paddingLeftStyle}>
      <Typography variant="h3" color="secondary">Description</Typography>
      <Typography color="text.secondary" sx={bodyStyle}>
        I love the look of real extensive Terminal User Interfaces and I wanted to make my own <br />
        The original inspiration for the project was to create a UI that I can run on my Ubuntu machine, the "homebase" machine <br />
        I did make it was some intention of making it general and expandable.
      </Typography>
      <img
          src="/images/ProjectHomebase10-3.PNG"
          alt="TUI"
          style={{
            maxWidth: "100%",
            height: "auto",
            display: "block",
          }}
        />
      <Typography variant="h3" color="secondary">Tech</Typography>
      <Typography color="text.secondary" sx={bodyStyle}>
        Kotlin... <br />
      </Typography>
      <Typography variant="h3" color="secondary">
        The Future
      </Typography>
      <Typography color="text.secondary" sx={bodyStyle}>
        I think the future of this project is super exciting! <br />
        I have a whole TODO list on the README for the Kotlin TUI so check that out if you are interested <br />
        I also have a little dev DevLog type thing in the README, I might make that into a bigger thing I am not sure.
      </Typography>
    </Box>
  </>
}

export default KotlinTUI