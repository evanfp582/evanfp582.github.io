import {React, useState, useEffect} from "react";
import {MuiMarkdown} from "mui-markdown";
import { Grid, Card, CardContent, Typography, Button, Box } from "@mui/material";
import DevLogPost from "../components/DevLogPost";
// import this_is_a_test from '../DevLog_articles/this_is_a_test.md'

const DevLog = ({files}) => {  

  return (
    <Box
      id="DevLog"
      sx={{
        backgroundColor: "background.default",
      }}
    >
      <Box textAlign="center">
        <Typography variant="h2" color="primary" sx={{ fontWeight: "bold" }}>
          Evan Fisher-Perez Dev Logs!
        </Typography>
      </Box>
      
      <Grid container justifyContent="center" spacing={4} sx={{ padding: "4rem" }}>
      {files.map((file, index) => (
        <Card key={index} sx={{margin: "10px", padding:"10px", width:"75%" }}>
          <CardContent>
           <Grid container alignItems="center">
            <Grid>
              <Typography variant="h3" sx={{ fontWeight: "bold" }}>
                {file.title}
              </Typography>
              <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                {file.date}
              </Typography>
            </Grid>

            <Grid sx={{ marginLeft: "auto" }}>
              <Button
                variant="contained"
                color="primary"
                href={`/#/${file.title}`}
                onClick={() => window.scrollTo(0, 0)}
              >
                Read
              </Button>
            </Grid>
          </Grid>
          </CardContent>
        </Card>
      ))}
      </Grid>
    </Box>
  );
};

export default DevLog;
