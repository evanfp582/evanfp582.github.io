import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import Resume from "./sections/Resume";
import Separator from "./components/Separator";
import Projects from "./sections/Projects";

// Define your custom color palette
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#c62828',
    },
    secondary: {
      main: '#ef6c00',
      dark: 'rgba(167,75,0,0)',
    },
    text: {
      header: '#eeeeee'
    },
    error: {
      main: '#9c9c9c',
    },
    warning: {
      main: '#e8df56',
    },
    background: {
      default: '#eeeeee',
      paper: '#e0e0e0',
    },
  },
  typography: {
    fontFamily: 'Oswald',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/*This applies the global reset */}
      <Navbar />
      <Home />
      <Separator />
      <Resume />
      <Separator />
      <Projects />
      <Separator />
    </ThemeProvider>
  );
}

export default App;
