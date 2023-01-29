import React from "react";
import NavBar from "./components/NavBar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CategoriesNavBar from "./components/CategoriesNavBar";
import Footer from "./components/Footer";
import YouMayAlsoLikeSection from "./components/YouMayAlsoLikeSection";
import CartItems from "./components/CartItems";
import { CartContextProvider } from "./hooks/CartContext";

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
    <CartContextProvider>
      <ThemeProvider theme={theme}>
        <NavBar />
        <CategoriesNavBar />
        <CartItems />
        <YouMayAlsoLikeSection />
        <Footer />
      </ThemeProvider>
    </CartContextProvider>
  );
}

export default App;
