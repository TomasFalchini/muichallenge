import { Box, Grid, Typography } from "@mui/material";
import React, { useContext } from "react";
import { CartContext } from "../hooks/CartContext";
import CartCard from "./CartCard";
import OrderSummary from "./OrderSummary";

function CartItems() {
  const { state } = useContext(CartContext);

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
          {state.map((el) => {
            return (
              <CartCard
                key={el.id}
                name={el.name}
                quantity={el.quantity}
                price={el.price}
                description={el.description}
                id={el.id}
                image={el.image}
                stock={el.stock}
              />
            );
          })}
        </Grid>
        <Grid item xs={12} lg={3}>
          <OrderSummary
            itemsQuantity={state.length}
            total={state.reduce(
              (prev, curr) => prev + curr.price * curr.quantity,
              0
            )}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default CartItems;
