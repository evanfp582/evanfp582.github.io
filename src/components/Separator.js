import { Box } from "@mui/material";

const Separator = ({ width = "95%" }) => {
return (
  <Box
    sx={{
      borderBottom: "2px solid rgb(194, 42, 39)", // Vermilion color
      width: width,
      margin: "auto",
    }}
  />
)
}

export default Separator 

