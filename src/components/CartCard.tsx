import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";

interface Props {
  name: string;
  quantity: number;
  price: number;
  description: string[] | undefined;
}

function CartCard({ name, quantity, price, description }: Props) {
  return (
    <Card sx={{ boxShadow: "none", width: "100%" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="120"
          width="120"
          image={`https://source.unsplash.com/random/?Clothes&${Math.ceil(
            Math.random() * 100
          )}`}
          alt="ropa"
        />
        <CardContent>
          <Box
            display="flex"
            flexDirection="column"
            gap="12px"
            justifyContent="center"
          >
            <Typography fontSize={18} fontWeight={700}>
              {name}
            </Typography>
            <Typography fontSize={16} fontWeight={600}>
              Quantity: {quantity}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography fontSize={15} fontWeight={600}>
              ${priceRange[0]} - ${priceRange[1]}
            </Typography>
            <Typography fontSize={14} fontWeight={400}>
              Minimum: {minimum}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CartCard;
