import { useState } from "react";
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";

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
    description: `Using computer vision (OpenCV) the original 3 recipes has been reduced to one.
                  Furthermore, the one recipe has been split up into chunks based on whitespace between text.`,
  },
  {
    label: "Title the Sections Using Commandline",
    image: "/images/input.PNG",
    description: `Next we go back to the command line and label the sections numbered in the photo.
                  These will be the keys of the JSON object we create.`,
  },
  {
    label: "JSON Output",
    image: "/images/JSON_output1.PNG",
    description: `Look at this! This is the JSON object generated using the image we provided and with the section titles we declared
                  There are notable errors in the text and this will be addressed below in the "Known Issues" sections`,
  },
  {
    label: "JSON Output 2?",
    image: "/images/JSON_output2.PNG",
    description: `Wait what is this?
                  Looking back at the original image, we can see that both the Peeping Tomboy and Traction have the same layout. 
                  Since they have the same layout, the program can guess that the title of the sections will be the same.
                  This is where the timesaving comes in. Using the number of sections, the order of sections, and the size of sections we can infer data is laid out similarly`,
  },
  {
    label: "New Section",
    image: "/images/sectioned2.PNG",
    description: `After inputting the section titles and see the JSON output, a new pop-up appears. Now we see the Sherry Cobbler (the 3rd and leftmost recipe on the page).
                  This is show because this recipe appears to be in a different format. It has another paragraph in the recipe. 
                  It adds a whole paragraph after the flavor text dedicated to the garnish`,
  },
  {
    label: "Title the New Sections Using Commandline",
    image: "/images/input2.PNG",
    description: `Once again we label the fields including the new "garnish_text" field`,
  },
  {
    label: "JSON Output",
    image: "/images/JSON_output3.PNG",
    description: `Horary! Once again we have a cluster of JSON and now with the new field`,
  },
  {
    label: "Finished",
    description: `Now you have a bunch of JSON data from images. My example only used one image, but you can use a whole book's worth of recipes.
                  My original use case was to then import these JSON objects into a Mongo Database, but it can be used for anything!`,
  },
];

const Image2Json = () => {

  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
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
        This was a project I did with a partner for Brickhack X, RIT's Annual 24 hour hackathon <br />
        The idea is that given an input of images of text, the user can create massive amount of JSON given that the text blobs are in similar forms. <br />
        I wanted to make this because it went along with my Cocktail Website project. I have physical cocktail recipe books and I wanted to add them to my cocktail database that I was building for that project.
        Honestly one my favorite projects I worked on and I see myself coming back to this project <br />
      </Typography>
      <Typography variant="h3" color="secondary">Tech</Typography>
      <Typography color="text.secondary" sx={{ mt: 1, mb:3, fontSize: "20px"}}>
        Written in python, using the computer vision library of OpenCV and the Optical Character Recognition tool pytesseract
      </Typography>
      <Typography variant="h3" color="secondary">
       The Future
      </Typography>
      <Typography color="text.secondary" sx={{ mt: 1, mb:3, fontSize: "20px"}}>
        I want to fix the issues mentioned in "The Problems" section below. If I successfully get passed that, I think this concept has some real promise. <br />
        Data processing is a massive field and the combination of computer vision and JSON is an under utilized possibility
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
                {step.image && <img
                  src={step.image}
                  alt="step_image"
                  class="h-[600px] w-auto"
                />}
                {step.description && <Typography color="text.secondary" sx={{ fontSize: "20px"}}>{step.description}</Typography>}
                <Box sx={{ mb: 2 }}>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    disabled={index === steps.length-1}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Continue
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
      </Box>
      <Box sx={{ paddingLeft: "4rem" }}>
        <Typography variant="h2" textAlign="center" color="primary" sx={{ fontWeight: "bold" }}>
          The Problems 
        </Typography>
        <Separator width="50%"/>
        <Typography variant="h4" color="secondary">The OCR with Symbols and Fractions</Typography>
        <Typography color="text.secondary" sx={{ fontSize: "20px"}}>
          This is the biggest issue that exists in the program right now. This is the issue that caused me stress from midnight to noon in Brickhack X. <br />
          The Optical Character Recognition tool I used (pytesseract) had a really hard time with fractions. Fractions are really common in recipes (especially cocktail recipes). <br />
          This is why in all the recipes you see with wacky symbols or numbers that don't make sense. I spent many hours during my hackathon trying to manually train pytesseract to understand fractions. <br />
          This problem is not including the problem the OCR tool has with just a black line. This is why 'Peeping Tomboy' is saved as 'Peeping Tomboy' a {`-3/4au<=`}.
        </Typography>
        <Typography variant="h4" color="secondary">Arrays</Typography>
        <Typography color="text.secondary" sx={{ fontSize: "20px"}}>
          This is an issue with parsing the actual "recipe" section of the recipe. Even if you select array, it is just a string. This is a small issue that I think could be easily fixed with just some regex.
        </Typography>
      </Box>
  </>)
}

export default Image2Json