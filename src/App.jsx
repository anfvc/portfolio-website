import "./App.css";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Tech from "./Components/Tech/Tech";
import Projects from "./Components/Projects/Projects.jsx";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Aos from "aos";
import "aos/dist/aos.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Paper } from "@mui/material";
import { useState } from "react";
import { useMemo } from "react";
import Experience from "./Components/Experience/Experience.jsx";

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [mode, setMode] = useState(prefersDarkMode);
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, [mode]);

  const appTheme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: mode ? "dark" : "light",
        },
      }),
    [mode]
  );

  function handleChange() {
    if (mode) setMode(false);
    else setMode(true);
  }

  return (
    <>
      <ThemeProvider theme={appTheme}>
        <Paper
          elevation={0}
          square
          sx={
            {
              /* width: "100vw", */
            }
          }
        >
          <Header mode={mode} handleChange={handleChange} />
          <main className="w-full min-h-screen">
            <Hero mode={mode} />
            <Tech />
            <About mode={mode} />
            <Experience mode={mode} />
            <Projects mode={mode} />
            <Contact mode={mode} />
          </main>
          <Footer mode={mode} />
        </Paper>
      </ThemeProvider>
    </>
  );
}

export default App;
