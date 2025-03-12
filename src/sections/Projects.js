import React from "react";
import { Grid, Card, CardContent, Typography, Button, Box } from "@mui/material";

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
      <Grid container spacing={4} sx={{ padding: "4rem" }}>
      {projects.map((project, index) => (
        <Grid item md={6} key={index}>
          <Card>
            <CardContent>
              <Typography variant="h5" sx={{ fontWeight: "bold", textAlign: "center" }}>
                {project.name}
              </Typography>
              <Typography color="text.secondary" sx={{ marginBottom: 2, fontSize: "20px" }}>
                {project.description}
              </Typography>
              <Box sx={{ display: "flex", gap: "20px" }}>
                <Button 
                  variant="contained" 
                  color="primary" 
                  href={project.link} 
                  target="_blank" 
                  sx = {{width:"50%"}}
                >
                  View on GitHub
                </Button>
                <Button 
                  variant="contained" 
                  color="primary" 
                  href={project.project_link}
                  onClick={() => window.scrollTo(0, 0)}
                  sx = {{width:"50%"}}
                >
                  Interactive Demo
                </Button>
              </Box>
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
    "description": "This project here. An interactive and fun website to teach people about myself and my projects",
    "link": "https://github.com/evanfp582/evanfp582.github.io",
    "project_link": "/#/portfolio_website"
  },
  {
    "name": "Image2JSON", 
    "description": "Brickhack X project to turn images into JSON objects",
    "link": "https://github.com/evanfp582/Image2JSON",
    "project_link": "/#/Image2JSON"
  },
  {
    "name": "play-thentication", 
    "description": "Brickhack 11 project to authenticate users by playing a silly game",
    "link": "https://github.com/evanfp582/play-thentication",
    "project_link": "/#/Playthentication"
  },
  {
    "name": "BartenderWebsite", 
    "description": "A Bartender Website that can recommend drinks depending on a user's available ingredients",
    "link": "https://github.com/ryanmurf9/BartenderWebsite",
    "project_link": "/#/BartenderWebsite"
  },
  {
    "name": "DiscordBots", 
    "description": "Playing around with Discord SDK",
    "link": "https://github.com/evanfp582/DiscordBots",
    "project_link": "/#/DiscordBots"
  },
  {
    "name": "todo_list_rust (W.I.P)", 
    "description": "Learning Rust language by making a todo list.",
    "link": "https://github.com/evanfp582/todo_list_rust",
    "project_link": "/#/TodoListRust"
  },
]

export default Projects;
