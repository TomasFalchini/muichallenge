import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Footer from "./components/Footer";

import { CartContextProvider } from "./hooks/CartContext";
import Cart from "./components/Cart";
import SignIn from "./components/SignIn";

let theme = createTheme({
  palette: {
    primary: {
      main: "#E6E8E9",
    },
    secondary: {
      main: "#091625",
    },
  },
  typography: {
    fontFamily: ["Open Sans"].join(","),
    button: {
      textTransform: "none",
    },
  },
});

function App() {
  return (
    <CartContextProvider>
      <ThemeProvider theme={theme}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Cart />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </CartContextProvider>
  );
}

export default App;
