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

      {files.map((file, index) => (
        <Card key={index} sx={{ padding: "4rem" }}>
          <CardContent>
            <Typography variant="h5" sx={{ fontWeight: "bold", textAlign: "center" }}>
              {file}
            </Typography>
            {/* <Typography color="text.secondary" sx={{ marginBottom: 2, fontSize: "20px" }}>
              {project.description}
            </Typography> */}
            <Box sx={{ display: "flex", gap: "20px" }}>
              <Button 
                variant="contained" 
                color="primary" 
                href={"/#/"+file}
                onClick={() => window.scrollTo(0, 0)}
              >
                Read
              </Button>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default DevLog;
