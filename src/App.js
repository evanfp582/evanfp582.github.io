import React, { useState, createContext } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { HashRouter, Routes, Route } from "react-router-dom"; // Import HashRouter instead of BrowserRouter
import { CssBaseline, AppBar, Toolbar } from "@mui/material";

import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import Resume from "./sections/Resume";
import Separator from "./components/Separator";
import Projects from "./sections/Projects";
import About from "./sections/About"
import PortfolioSite from "./project_files/PortfolioSite";
import Image2Json from "./project_files/Image2Json";
import BartenderWebsite from "./project_files/BartenderWebsite";
import Footer from "./components/Footer";

export const ThemeContext = createContext();

const initialTheme = {
  primaryColor: { r: 198, g: 40, b: 40 },
  secondaryColor: { r: 239, g: 108, b: 0 },
  textColor: { r: 238, g: 238, b: 238 },
  secondaryTextColor: { r: 97, g: 97, b: 97 },
  backgroundColor: { r: 238, g: 238, b: 238 },
  paperColor: {r: 224, g: 224, b: 224}
}

function App() {
  const [primaryColor, setPrimaryColor] = useState(initialTheme.primaryColor);
  const [secondaryColor, setSecondaryColor] = useState(initialTheme.secondaryColor);
  const [textColor, setTextColor] = useState(initialTheme.textColor);
  const [secondaryTextColor, setSecondaryTextColor] = useState(initialTheme.secondaryTextColor);
  const [backgroundColor, setBackgroundColor] = useState(initialTheme.backgroundColor);
  const [paperColor, setPaperColor] = useState(initialTheme.paperColor)

  const theme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: `rgb(${primaryColor.r}, ${primaryColor.g}, ${primaryColor.b})`,
      },
      secondary: {
        main: `rgb(${secondaryColor.r}, ${secondaryColor.g}, ${secondaryColor.b})`,
      },
      text: {
        header: `rgb(${textColor.r}, ${textColor.g}, ${textColor.b})`,
        secondary: `rgb(${secondaryTextColor.r}, ${secondaryTextColor.g}, ${secondaryTextColor.b})`,
      },
      error: {
        main: "#9c9c9c",
      },
      warning: {
        main: "#e8df56",
      },
      background: {
        default: `rgb(${backgroundColor.r}, ${backgroundColor.g}, ${backgroundColor.b})`,
        paper: `rgb(${paperColor.r}, ${paperColor.g}, ${paperColor.b})`,
      },
    },
    typography: {
      fontFamily: "Oswald",
    },
  });

  return (
    <ThemeContext.Provider value={{ 
      setPrimaryColor, primaryColor,
      setSecondaryColor, secondaryColor,
      setTextColor, textColor,
      setSecondaryTextColor, secondaryTextColor,
      setBackgroundColor, backgroundColor,
      setPaperColor, paperColor
    }}>
      <HashRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
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
              <Footer />
              </>
            } />
            <Route path="/portfolio_website" element={<>
              <Navbar /> 
              <PortfolioSite />
              <Footer />
              </>
            } />
            <Route path="/BartenderWebsite" element={<>
              <Navbar /> 
              <BartenderWebsite />
              <Footer />
              </>
            } />
            <Route path="/image2JSON" element={<>
              <Navbar /> 
              <Image2Json />
              <Footer />
              </>
            } />
          </Routes>
        </ThemeProvider>
      </HashRouter>
    </ThemeContext.Provider>
  );
}

export default App;
