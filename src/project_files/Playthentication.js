import { useState } from "react";
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"

import Game from "../snake/Game"
import Separator from "../components/Separator"

const Playthentication = () => {

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
        This is a website front end where you can browse cocktail recipes, create a user, have a "shelf" that contains what ingredients you have, and see what drinks you can make. <br />
        The user would also be able ot make and public their own recipes and create lists of cocktails for organization purposes. <br />
        paired with a MongoDB backend that contains users, ingredients, recipes, user's shelves, and every cocktail recipe. <br />
        This was a project I did with a friend who also had a passion for making cocktails. <br />
      </Typography>
      <Typography variant="h3" color="secondary">Tech</Typography>
      <Typography color="text.secondary" sx={{ mt: 1, mb:3, fontSize: "20px"}}>
        Front end: React JS with Material UI components and using google authentication. <br />
        Back end: Express JS and Mongoose with a Mongo database.
      </Typography>
      <Typography variant="h3" color="secondary">
        Future
      </Typography>
      <Typography color="text.secondary" sx={{ mt: 1, mb:3, fontSize: "20px"}}>
        All of the features I mentioned above were never functional. <br />
        In terms of new features, I'd love to have a mobile app to go with the website. This app would alow an at-home bartender to host a party where people can order off a cocktail list.<br />
        Finally I would love to actually host this project, perhaps using my own web hosting.
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
      <Typography>https://www.geeksforgeeks.org/create-a-snake-game-in-react/</Typography>
      <Game />
    </Box>
    <Typography color="text.secondary" sx={{ fontSize: "20px", paddingLeft: "4rem"}}>
      As you can see, I like red
    </Typography>

  </>)
}

export default Playthentication