import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import Resume from "./sections/Resume";
import Separator from "./components/Separator";
import Projects from "./sections/Projects";
import About from "./sections/About"
import PortfolioSite from "./project_files/PortfolioSite";

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
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline /> {/*This applies the global reset */}
        <Routes>
          <Route path="/" element={<>
            <Navbar />
            <Home />
            <Separator />
            <About />
            <Separator />
            <Resume />
            <Separator />
            <Projects />
            <Separator />
            </>
          } />
          <Route path="/portfolio_website" element={<>
          <Navbar /> 
          <PortfolioSite />
          </>
          } />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
