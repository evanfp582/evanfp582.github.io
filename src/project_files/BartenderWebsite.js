import { useState } from "react";
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"

import Separator from "../components/Separator"

const bodyStyle = { fontSize: { xs: "1rem", md: "1.25rem" }, textAlign: "justify" }
const h1Style = { fontWeight: "bold", fontSize: { xs: "3.5rem", md: "5.5rem" } }
const paddingLeftStyle = { px: { xs: 3, sm: 6, md: 10 }, py: 4 }

const BartenderWebsite = () => {
  return (<>
    <Box textAlign="center">
      <Typography variant="h1" color="primary" sx={h1Style}>
          Bartender Website 
      </Typography>
      <Separator width="50%"/>
    </Box>
    <Box sx={paddingLeftStyle}>
      <Typography variant="h3" color="secondary">Description</Typography>
      <Typography color="text.secondary" sx={bodyStyle}>
        This is a website front end where you can browse cocktail recipes, create a user, have a "shelf" that contains what ingredients you have, and see what drinks you can make. <br />
        The user would also be able ot make and public their own recipes and create lists of cocktails for organization purposes. <br />
        paired with a MongoDB backend that contains users, ingredients, recipes, user"s shelves, and every cocktail recipe. <br />
        This was a project I did with a friend who also had a passion for making cocktails. <br />
      </Typography>
      <Typography variant="h3" color="secondary">Tech</Typography>
      <Typography color="text.secondary" sx={bodyStyle}>
        Front end: React JS with Material UI components and using google authentication. <br />
        Back end: Express JS and Mongoose with a Mongo database.
      </Typography>
      <Typography variant="h3" color="secondary">
       Future
      </Typography>
      <Typography color="text.secondary" sx={bodyStyle}>
        Some of the features I mentioned above were never functional. <br />
        In terms of new features, I"d love to have a mobile app to go with the website. This app would alow an at-home bartender to host a party where people can order off a cocktail list.<br />
        Finally I would love to actually host this project, perhaps using my own web hosting.
      </Typography>
    </Box>
    <Box
      sx={{
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        display: "flex",
        px: { xs: 2, sm: 4, md: 6 }, // Padding for better spacing on mobile
      }}
    >
      <Typography variant="h2" color="primary" sx={{ fontWeight: "bold", textAlign: "center", fontSize: { xs: "2rem", md: "3rem" } }}>
        Screenshot
      </Typography>
      <Separator width="50%" />
      
      <Box sx={{ border: "2px solid black", mt: "1rem", maxWidth: "100%" }}>
        <img
          src="/images/bartender_website.PNG"
          alt="website screenshot"
          style={{
            maxWidth: "100%",
            height: "auto",
            display: "block",
          }}
        />
      </Box>
    </Box>

    <Typography color="text.secondary" sx={bodyStyle, paddingLeftStyle}>
      As you can see, I like red
    </Typography>
    
  </>)
}


export default BartenderWebsite