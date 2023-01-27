import React from "react";
import NavBar from "./components/NavBar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CategoriesNavBar from "./components/CategoriesNavBar";
import Footer from "./components/Footer";
import YouMayAlsoLikeSection from "./components/YouMayAlsoLikeSection";

let theme = createTheme({
  palette: {
    primary: {
      main: "#E6E8E9",
    },
    secondary: {
      main: "#091625",
    },
  },
  typography: { fontFamily: ["Open Sans"].join(",") },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <CategoriesNavBar />
      <YouMayAlsoLikeSection />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
