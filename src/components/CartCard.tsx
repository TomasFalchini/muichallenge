import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Box,
  Button,
  CardActionArea,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

interface Props {
  name: string;
  quantity: number;
  price: number;
  description?: string[];
}

function CartCard({ name, quantity, price, description }: Props) {
  return (
    <Card sx={{ width: "100%", marginBottom: "24px" }}>
      <CardActionArea
        sx={{
          width: "100%",
          display: "flex",
          padding: "24px",
          paddingLeft: 0,
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <CardMedia
          sx={{
            width: { xs: "360px", sm: "120px" },
            height: { xs: "360px", sm: "120px" },
            padding: { xs: "24px", sm: 0 },
          }}
          component="img"
          image={`https://source.unsplash.com/random/?Clothes&${Math.ceil(
            Math.random() * 100
          )}`}
          alt="ropa"
        />
        <CardContent
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            paddingTop: 0,
          }}
        >
          <Box
            display="flex"
            flexDirection="column"
            gap="14px"
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            <Typography fontSize={18} fontWeight={700}>
              {name}
            </Typography>
            <Typography fontSize={16} fontWeight={600}>
              Quantity: {quantity}
            </Typography>
            {description ? (
              <List sx={{ width: "100%", maxWidth: 360 }}>
                {description.map((el) => {
                  return (
                    <ListItem>
                      <ListItemText primary={description} />
                    </ListItem>
                  );
                })}
              </List>
            ) : null}
            <Button
              color="secondary"
              sx={{
                padding: 0,
              }}
            >
              <DeleteOutlineIcon />

              <Typography fontSize={12} fontWeight={600}>
                Remove
              </Typography>
            </Button>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-end"
            gap="14px"
          >
            <Typography fontSize={18} fontWeight={700}>
              ${price}
            </Typography>
            <Box display="flex">
              <Typography fontSize={18} fontWeight={600}>
                {"Total:"}
              </Typography>
              <Typography fontSize={18} fontWeight={700}>
                ${price * quantity}
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CartCard;
