import {React, useState, useEffect} from "react";
import Separator from "./Separator"
import {MuiMarkdown} from "mui-markdown";
import { Grid, Typography, Box } from "@mui/material";
// import this_is_a_test from '../DevLog_articles/this_is_a_test.md'

const DevLogPost = ({file}) => {
  // const file= 'this_is_a_test.md'

  const [post, setPost] = useState('')

  useEffect( () => {
    import(`../devLogs/${file}`)
      .then(res => {
          fetch(res.default)
            .then(res => res.text())
            .then(res => setPost(res));
      })
      .catch(err => console.log(err));
  }, [])

  return (
    <Box sx={{ml: "10px"}}>
    <MuiMarkdown
      overrides={{
        // Markdown parser options
        options: { forceBlock: true },

        h1: {
          component: Typography,
          props: { variant: "h1", gutterBottom: true, sx: { color: "text.primary" } },
        },
        h2: {
          component: Typography,
          props: { variant: "h2", gutterBottom: true, sx: { color: "text.primary" } },
        },
        h3: {
          component: Typography,
          props: { variant: "h3", gutterBottom: true, sx: { color: "text.primary" } },
        },
        h4: {
          component: Typography,
          props: { variant: "h4", gutterBottom: true, sx: { color: "text.primary" } },
        },
        h5: {
          component: Typography,
          props: { variant: "h5", gutterBottom: true, sx: { color: "text.primary" } },
        },
        h6: {
          component: Typography,
          props: { variant: "h6", gutterBottom: true, sx: { color: "text.primary" } },
        },

        p: {
          component: "div",
          props: { style: { whiteSpace: "pre-line", marginBottom: "1em" } },
        },

        ul: { component: "ul", props: { style: { marginLeft: "1.5em", marginBottom: "1em" } } },
        ol: { component: "ol", props: { style: { marginLeft: "1.5em", marginBottom: "1em" } } },
        li: { component: "li", props: { style: { marginBottom: "0.5em" } } },

        // This does not work
        hr: { component: Separator},
      }}
    >
      {post}
    </MuiMarkdown>
  </Box>
  );
};

export default DevLogPost;
