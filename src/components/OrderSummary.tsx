import { Box, Button, Typography } from "@mui/material";
import React from "react";

interface Props {
  itemsQuantity: number;
  total: number;
}

function OrderSummary({ itemsQuantity, total }: Props) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minWidth: "336px",
        justifyContent: "flex-start",
      }}
    >
      <Typography fontWeight={700} marginBottom={"24px"} fontSize={24}>
        Order Summary
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "43px",
        }}
      >
        <Typography fontWeight={400} fontSize={16}>
          Number of items
        </Typography>
        <Typography fontWeight={400} fontSize={16}>
          {itemsQuantity}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "32px",
        }}
      >
        <Typography fontWeight={600} fontSize={18}>
          Total:
        </Typography>
        <Typography fontWeight={700} fontSize={24}>
          ${total}
        </Typography>
      </Box>
      <Button
        variant="contained"
        disableElevation
        sx={{
          backgroundColor: "#3A4451",
          borderRadius: "8px",

          padding: "12px",
          marginBottom: "12px",
        }}
      >
        <Typography
          fontWeight={700}
          fontSize={16}
          sx={{
            color: "#FFFFFF",
          }}
        >
          Proceed to Checkout
        </Typography>
      </Button>
      <Button
        variant="contained"
        disableElevation
        sx={{
          border: "2px solid #091625",
          borderRadius: "8px",
          padding: "12px",
        }}
      >
        <Typography fontWeight={700} fontSize={16}>
          Continue shopping
        </Typography>
      </Button>
    </Box>
  );
}

export default OrderSummary;
