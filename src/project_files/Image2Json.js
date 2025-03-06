import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { IconButton } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import Separator from "../components/Separator"

const steps = [
  {
    label: "Initial Input Image",
    image: "/images/original.jpg",
    description: `You start off with just a picture of the cocktail recipe cookbook that you want in your database.
                  This should be a clear and properly lit photo for the OCR to work the best it can.`,
  },
  {
    label: "Computer Vision to Split into Sections",
    image: "/images/sectioned.PNG",
    description:
      `Using computer vision (OpenCV) the original 3 recipes has been reduced to one.
      Furthermore, the one recipe has been split up into chunks based on whitespace between text.`,
  },
  {
    label: "Title The Sections Via Commandline",
    image: "/images/input.PNG",
    description: `Next we go back to the command line and label the sections numbered in the photo.
                  These will be the keys of the JSON object we create.`,
  },
  {
    label: "String Output",
    image: "/images/next_output.PNG",
    description: `Wait what is this? 
                  Looking back at the original image, we can see that both the Peeping Tomboy and Traction have the same layout. 
                  Since they have the same layout, the program can guess that the title of the sections will be the same.
                  This is where the timesaving comes in. Using the number of sections, the order of sections, and the size of sections we can infer data is laid out similarly`,
  },
];

const Image2Json = () => {

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

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
    <Box sx={{ paddingLeft: "4rem" }}>
      <Typography variant="h2" textAlign="center" color="primary" sx={{ fontWeight: "bold" }}>
        Demo 
      </Typography>
      <Separator width="50%"/>
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
    <Box sx={{ paddingLeft: "4rem" }}>
    <Typography variant="h4" color="secondary">Example Execution</Typography>
      <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel>
                <Typography color="text.secondary" sx={{ fontSize: "20px", fontWeight: "bold" }}>{step.label}</Typography>
              </StepLabel>
              <StepContent>
                <img
                  src={step.image}
                  alt="step_image"
                  style={{width: "300px", height: "300px"}}
                />
                <Typography color="text.secondary" sx={{ fontSize: "20px"}}>{step.description}</Typography>
                <Box sx={{ mb: 2 }}>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? "Finish" : "Continue"}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </Box>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} sx={{ p: 3 }}>
            <Typography>All steps completed - you are finished</Typography>
            <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
              Reset
            </Button>
          </Paper>
        )}
      </Box>
  </>)
}

export default Image2Json