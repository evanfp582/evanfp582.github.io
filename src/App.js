import React, { useState, createContext, useContext } from "react";
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


export const ThemeContext = createContext();

function App() {
  const [primaryColor, setPrimaryColor] = useState({ r: 198, g: 40, b: 40 });

  const theme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: `rgb(${primaryColor.r}, ${primaryColor.g}, ${primaryColor.b})`,
      },
      secondary: {
        main: "#ef6c00",
      },
      text: {
        header: "#eeeeee"
      },
      error: {
        main: "#9c9c9c",
      },
      warning: {
        main: "#e8df56",
      },
      background: {
        default: "#eeeeee",
        paper: "#e0e0e0",
      },
    },
    typography: {
      fontFamily: "Oswald",
    },
  });

  return (
    <ThemeContext.Provider value={{ setPrimaryColor, primaryColor }}>
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
    </ThemeContext.Provider>
  );
}

export default App;
