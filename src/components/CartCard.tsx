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
import RemoveButton from "./RemoveButton";
import QuantitySelect from "./QuantitySelect";

interface Props {
  name: string;
  quantity: number;
  price: number;
  description?: Array<string[]>;
  id: number;
  image: string;
  stock: number;
}

function CartCard({
  name,
  quantity,
  price,
  description,
  id,
  image,
  stock,
}: Props) {
  return (
    <Card
      sx={{
        width: "100%",
        marginBottom: "24px",
        boxShadow: "none",
        borderBottom: "1px solid #09162550",
      }}
    >
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
            alignSelf: { xs: "center", sm: "flex-start" },
          }}
          component="img"
          image={image}
          alt="ropa"
        />
        <CardContent
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            paddingTop: 0,
            flexDirection: { xs: "column", sm: "row" },
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
              Quantity:
              <QuantitySelect quantity={quantity} stock={stock} id={id} />
            </Typography>

            {description ? (
              <Box sx={{ width: "100%", maxWidth: 390 }}>
                <ul>
                  {description.map((el) => {
                    return (
                      <li>
                        <Box
                          display="flex"
                          sx={{
                            flexDirection: { xs: "column", md: "row" },
                            gap: { xs: "2px", md: "12px" },
                          }}
                        >
                          <Typography fontSize={14} fontWeight={600}>
                            {el[0]}
                          </Typography>
                          <Typography
                            sx={{
                              opacity: "0.8",
                            }}
                            fontSize={14}
                            fontWeight={500}
                          >
                            {el[1]}
                          </Typography>
                        </Box>
                      </li>
                    );
                  })}
                </ul>
              </Box>
            ) : null}
            <Box display="flex" alignItems="center">
              {description?.length ? (
                <Button>
                  <Typography fontWeight={600} fontSize={12} color="secondary">
                    Edit pack |
                  </Typography>
                </Button>
              ) : null}
              <RemoveButton id={id} />
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-end"
            gap="14px"
          >
            <Typography fontSize={18} fontWeight={700}>
              ${price.toFixed(2)}
            </Typography>
            <Box display="flex">
              <Typography fontSize={18} fontWeight={600}>
                {"Total:"}
              </Typography>
              <Typography fontSize={18} fontWeight={700}>
                ${(price * quantity).toFixed(2)}
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CartCard;
