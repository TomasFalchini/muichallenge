import React from "react";
import NavBar from "./components/NavBar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CategoriesNavBar from "./components/CategoriesNavBar";
import Footer from "./components/Footer";
import YouMayAlsoLikeSection from "./components/YouMayAlsoLikeSection";
import { Grid } from "@mui/material";
import OrderSummary from "./components/OrderSummary";

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
      <Grid
        container
        spacing={2}
        sx={{
          padding: "92px",
          paddingTop: "32px",
        }}
      >
        <Grid item xs={12} lg={9}></Grid>
        <Grid item xs={12} lg={3}>
          <OrderSummary itemsQuantity={3} total={3560} />
        </Grid>
      </Grid>

      <YouMayAlsoLikeSection />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
