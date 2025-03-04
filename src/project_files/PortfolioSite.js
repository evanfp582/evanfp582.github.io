import { Box, Typography } from "@mui/material";
import Separator from "../components/Separator"

const PortfolioSite = () => {


  return(
    <Box
      id="home"
      sx={{
        minHeight: "100vh",
        backgroundColor: "background.default",
        display: "flex",
        justifyContent: "center",
        // flexDirection: "column",
        alignItems: "center",
        gap: 3,
        mb: 2,
      }}
    >
      <Box 
        textAlign="center"
        sx={{
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <Typography variant="h1" color="primary" sx={{ fontWeight: "bold" }}>
          This will be the page for the Portfolio Website Interactive Demonstration 
        </Typography>
        <Typography variant="h3" color="text.secondary" sx={{ mt: 0 }}>
          Hip hip horray!
        </Typography>
        <Separator width="50%" />
        
      </Box>
    </Box>
  )
}

export default PortfolioSite