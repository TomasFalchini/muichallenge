import React from "react";
import NavBar from "./components/NavBar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CategoriesNavBar from "./components/CategoriesNavBar";

let theme = createTheme({
  palette: {
    primary: {
      main: "#E6E8E9",
    },
    secondary: {
      main: "#091625",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <CategoriesNavBar />
    </ThemeProvider>
  );
}

export default App;
