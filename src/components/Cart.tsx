import React from "react";
import CategoriesNavBar from "./CategoriesNavBar";
import YouMayAlsoLikeSection from "./YouMayAlsoLikeSection";
import CartItems from "./CartItems";
import Box from "@mui/material/Box/Box";

function Cart() {
  return (
    <Box>
      <CategoriesNavBar />
      <CartItems />
      <YouMayAlsoLikeSection />
    </Box>
  );
}

export default Cart;
