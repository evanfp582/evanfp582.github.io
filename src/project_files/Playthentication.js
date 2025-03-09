import { useState } from "react";
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import StepContent from "@mui/material/StepContent";


import Game from "../snake/Game"
import Separator from "../components/Separator"
import Login from "../components/Login";

// const steps = ['Login', 'Play the Game', 'The Resulting Password'];

// const steps = [
//   {label: "Login", component: <Login />},
//   {label: "Play the Game", component: <Game />},
//   {label: "Result", component: <Typography> Meow </Typography>},
// ]


const Playthentication = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
      <Game />
      <Typography color="text.secondary" sx={{ fontSize: "20px", paddingLeft: "4rem"}}>
        Snake Source: https://www.geeksforgeeks.org/create-a-snake-game-in-react/ <br />
        This is a game of snake that I took from GeeksforGeeks and modified so it is no longer random and it records your key strokes
      </Typography>
      </>},
    {label: "Result", component: <p>{password}</p>},
  ]

  return (<>
    <Box textAlign="center">
      <Typography variant="h1" color="primary" sx={{ fontWeight: "bold" }}>
          Play-thentication 
      </Typography>
      <Separator width="50%"/>
    </Box>
    <Box sx={{ padding: "4rem" }}>
      <Typography variant="h3" color="secondary">Description</Typography>
      <Typography color="text.secondary" sx={{ mt: 1, mb:3, fontSize: "20px"}}>
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
      <Typography color="text.secondary" sx={{ mt: 1, mb:3, fontSize: "20px"}}>
        React JS, Java (for the game), and Auth0's authentication platform. <br />
      </Typography>
      <Typography variant="h3" color="secondary">
        Future
      </Typography>
      <Typography color="text.secondary" sx={{ mt: 1, mb:3, fontSize: "20px"}}>
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

      <Box sx={{ width: '80%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel>
              <Typography color="text.secondary" sx={{ fontSize: "20px", fontWeight: "bold" }}>{step.label}</Typography>
            </StepLabel>
            <StepContent>
              <Box sx={{ mb: 2 }}>
                {/* {step.component} */}
                
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