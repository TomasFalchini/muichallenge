import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";

interface Props {
  title: string;
  priceRange: [number, number];
  minimum: number;
}

function AlsoLikeCard({ title, priceRange, minimum }: Props) {
  return (
    <Card sx={{ maxWidth: 336, boxShadow: "none" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="336"
          width="336"
          image={`https://source.unsplash.com/random/?Clothes&${Math.ceil(
            Math.random() * 100
          )}`}
          alt="ropa"
        />
        <CardContent>
          <Typography fontSize={16} fontWeight={700}>
            {title}
          </Typography>
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

export default AlsoLikeCard;
