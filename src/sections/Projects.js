import React from "react";
import { Grid, Card, CardContent, Typography, Button, Box } from '@mui/material';

const Projects = () => {
  return (
    <Box
      id="projects"
      sx={{
        minHeight: "100vh",
        backgroundColor: "background.default",
      }}
    >
      <Box textAlign="center">
        <Typography variant="h2" color="primary" sx={{ fontWeight: "bold" }}>
          My Projects!
        </Typography>
      </Box>
      <Grid container spacing={4} sx={{ padding: '4rem' }}>
      {projects.map((project, index) => (
        <Grid item md={6} key={index}>
          <Card>
            <CardContent>
              <Typography variant="h5" sx={{ fontWeight: 'bold', textAlign: "center" }}>
                {project.name}
              </Typography>
              <Typography color="text.secondary" sx={{ marginBottom: 2, fontSize: "20px" }}>
                {project.description}
              </Typography>
              <Button 
                variant="contained" 
                color="primary" 
                href={project.link} 
                target="_blank" 
                fullWidth
              >
                View on GitHub
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
    </Box>
  );
};

const projects = [
  {
    "name": "evanfp582.github.io", 
    "description": "Hay, that's this here",
    "link": "https://github.com/evanfp582/evanfp582.github.io"
  },
  {
    "name": "BartenderWebsite", 
    "description": "A Bartender Website using MERN stack that can recommend drinks depending on a user's available ingredients. Web scraping stuff is written in Python and was used to initially fill up the database with recipes.",
    "link": "https://github.com/ryanmurf9/BartenderWebsite"
  },
  {
    "name": "Image2JSON", 
    "description": "Brickhack X Project to turn images into JSON objects",
    "link": "https://github.com/evanfp582/Image2JSON"
  },
  {
    "name": "play-thentication", 
    "description": "Brickhack 11 Project to authenticate users by playing a silly game",
    "link": "https://github.com/evanfp582/play-thentication"
  },
  {
    "name": "DiscordBots", 
    "description": "Playing around with Discord SDK",
    "link": "https://github.com/evanfp582/DiscordBots"
  },
  {
    "name": "todo_list_rust", 
    "description": "Learning rust by making a todo list",
    "link": "https://github.com/evanfp582/todo_list_rust"
  },
]


export default Projects;
