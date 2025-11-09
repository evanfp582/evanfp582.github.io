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


const Pytorch = () => {
  return<>
    <Box textAlign="center" sx={paddingLeftStyle}>
      <Typography color="primary" sx={h1Style}>
          Pytorch
      </Typography>
      <Separator width="50%"/>
    </Box>
    <Box sx={paddingLeftStyle}>
      <Typography variant="h3" color="secondary">Description</Typography>
      <Typography color="text.secondary" sx={bodyStyle}>
        My job pays for Udemy courses in relevant fields so I figured why not and entrolled in a 50 hour long Pytorch course <br />
        I wish to add fun projects from the course here and do projects outside of the scope of the class. 
      </Typography>
      <Typography variant="h3" color="secondary">Tech</Typography>
      <Typography color="text.secondary" sx={bodyStyle}>
        Python, PyTorch, Google Colab, Linear Algrebra, Numpy <br />
      </Typography>
      <Typography variant="h3" color="secondary">
        The Future
      </Typography>
      <Typography color="text.secondary" sx={bodyStyle}>
        To be written
      </Typography>
    </Box>
  </>
}

export default Pytorch