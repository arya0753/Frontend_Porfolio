import { Box, ThemeProvider } from "@mui/material";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Page1 from "./components/Page1";
import Preloader from "./components/Preloader";
import Contact from "./contact/Contact";

import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import About from "./About/About";
import Blog from "./blog/Blog";
import ViewBlog from "./blog/ViewBlog";
import fontTheme from "./theme";
import Work from "./Work/Work";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider theme={fontTheme}>
      <AnimatePresence mode="wait">
        {loading ? (
          <Preloader key="preloader" />
        ) : (
          <div
            className="App"
            key="main"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <Navbar />

            <Box
              className="container"
              sx={{
                width: { xs: "100%", md: "55%" },
                // minHeight: "100vh",
                mt: 2,
                // backgroundColor: "transparent",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                // background:"red"
              }}
            >
              <Routes>
                <Route path="/" element={<Page1 />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/viewblog" element={<ViewBlog />} />
                <Route path="/about" element={<About />} />
                <Route path="/work" element={<Work />} />
              </Routes>
            </Box>
          </div>
        )}
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default App;
