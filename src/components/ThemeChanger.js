
import React from "react";
import { Slider, Box, Typography } from "@mui/material";

const ThemeChanger = ({ setColor, color, text }) => {

  const handleSliderChange = (color, value) => {
    setColor(prevState => ({
      ...prevState,
      [color]: value,
    }));
  };

  return (<>
  <Typography variant="h4"color="text.secondary" sx= {{fontWeight: "bold", textAlign: "center"}}>{text}</Typography>
    <Box sx={{ marginTop: 2, width:"95%"}}>
      <Typography color="text.secondary">Red</Typography>
      <Slider
        onChange={(e, newValue) => handleSliderChange("r", newValue)}
        min={0}
        defaultValue={color.r}
        max={255}
        valueLabelDisplay="auto"
      />
    </Box>
    <Box sx={{ marginTop: 2, width:"95%" }}>
      <Typography color="text.secondary">Green</Typography>
      <Slider
        onChange={(e, newValue) => handleSliderChange("g", newValue)}
        min={0}
        defaultValue={color.g}
        max={255}
        valueLabelDisplay="auto"
      />
    </Box>
    <Box sx={{ marginTop: 2, width:"95%" }}>
      <Typography color="text.secondary">Blue</Typography>
      <Slider
        onChange={(e, newValue) => handleSliderChange("b", newValue)}
        min={0}
        defaultValue={color.b}
        max={255}
        valueLabelDisplay="auto"
      />
    </Box>
  
  
  </>)

}



export default ThemeChanger