import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import CartCard from "./CartCard";
import OrderSummary from "./OrderSummary";

function CartItems() {
  return (
    <Box
      sx={{
        padding: { xs: "24px", md: "92px" },
        paddingY: "24px",
      }}
    >
      <Typography fontSize={24} fontWeight={700}>
        Your cart
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={9}>
          <CartCard name={"Basic T-Shirt"} quantity={10} price={13.5} />
          <CartCard name={"Basic T-Shirt"} quantity={10} price={13.5} />
          <CartCard name={"Basic T-Shirt"} quantity={10} price={13.5} />
        </Grid>
        <Grid item xs={12} lg={3}>
          <OrderSummary itemsQuantity={3} total={3560} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default CartItems;
