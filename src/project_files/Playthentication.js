import { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import StepContent from "@mui/material/StepContent";

import Game from "../snake/Game"
import Separator from "../components/Separator"
import Login from "../components/Login";

const bodyStyle = { fontSize: { xs: "1rem", md: "1.25rem" }, textAlign: "justify" }
const h1Style = { fontWeight: "bold", fontSize: { xs: "3.5rem", md: "5.5rem" } }
const paddingLeftStyle = { px: { xs: 3, sm: 6, md: 10 }, py: 4 }

const Playthentication = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [authString, setAuthString] = useState("");

  const handleNext = () => {
    if (activeStep === steps.length - 1){
      handleReset()
    } else{
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const steps = [
    {label: "Login", component: <Login
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
      onNext={handleNext}
    />},
    {label: "Play the Game", component:<>
      <Game setAuthString={setAuthString}/>
      <Typography color="text.secondary" sx={bodyStyle}>
        Snake Source: https://www.geeksforgeeks.org/create-a-snake-game-in-react/ <br />
        This is a game of snake that I took from GeeksforGeeks and modified so it is no longer random and it records your key strokes
      </Typography>
      </>},
    {label: "Result", component: <Typography>
      Resulting keystrokes are appended to your password: {password}{authString}
      </Typography>},
  ]

  return (<>
    <Box textAlign="center">
      <Typography variant="h1" color="primary" sx={h1Style}>
          Play-thentication 
      </Typography>
      <Separator width="50%"/>
    </Box>
    <Box sx={paddingLeftStyle}>
      <Typography variant="h3" color="secondary" sx={h1Style}>Description</Typography>
      <Typography color="text.secondary" sx={bodyStyle}>
        This project is a silly idea for 2 factor authentication by playing a game. <br />
        Developed for RIT's annual hackathon, Brickhack XI. <br />
        A teammate and I created a website where in order to authenticate yourself as a user, you need to login and then play a game. <br />
        The first time you log in, the way you play the game will be recorded and you will need to play it the same exact way each time to log in. <br />
        We chose to make this because: <br />
          1. it is silly <br />
          2. We both have an interest in cybersecurity <br /> 
          3. We wanted to meet the prize tracks for "Best use of Auth0", "Best Remix Hack", and "Best Domain Name" <br />
      </Typography>
      <Typography variant="h3" color="secondary">Tech</Typography>
      <Typography color="text.secondary" sx={bodyStyle}>
        React JS, Java (for the game), and Auth0"s authentication platform. <br />
      </Typography>
      <Typography variant="h3" color="secondary">
        Future
      </Typography>
      <Typography color="text.secondary" sx={bodyStyle}>
        We never got Auth0 to play nice with what we wanted to do. Turns out the secure authentication platform does not like a little fun. <br />
        While there is likely not a future for this project, if/when I make a public web service that requires authenticated users, I will probably use Auth0
      </Typography>
    </Box>
    <Box
      sx={{
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        display: "flex",
      }}>
      <Typography variant="h2" color="primary" sx={{ fontWeight: "bold" }}>
          Example
      </Typography>
      <Separator width="50%"/>

      <Box sx={{ width: "80%" }}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel>
                <Typography color="text.secondary" sx={{ fontSize: { xs: "1.5rem", md: "3.5rem" }, fontWeight: "bold" }}>{step.label}</Typography>
              </StepLabel>
              <StepContent>
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
                {step.component}
              </StepContent>
            </Step>
          ))}
        </Stepper>
      </Box>
    </Box>
  </>)
}

export default Playthentication