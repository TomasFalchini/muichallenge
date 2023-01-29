import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const Image = styled("img")(({ theme }) => ({
  height: 300,
  width: 300,
  borderRadius: "10px",
}));

function EmptyCart() {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" width="100%">
      <Typography
        fontWeight={700}
        fontSize={24}
        marginBottom={-5}
        zIndex="1"
        color="primary"
      >
        Your cart is empty
      </Typography>
      <Image
        src="https://images.unsplash.com/photo-1619191163420-4a7c0798b8a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt="empty cart"
      />
    </Box>
  );
}

export default EmptyCart;
