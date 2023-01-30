import * as React from "react";

import Typography from "@mui/material/Typography";

import { CartContext } from "../hooks/CartContext";
import styled from "@emotion/styled";

interface Props {
  quantity: number;
  stock: number;
  id: number;
}

const Selects = styled("select")(({ theme }) => ({
  padding: "0",
  backgroundColor: "transparent",
  border: "transparent",
  textAlign: "start",
  fontSize: "16px",
  fontWeight: "700",
  width: "38px",
  textDecoration: "underline",
}));

const Options = styled("option")(({ theme }) => ({
  height: "100%",
  padding: "0",
  backgroundColor: "transparent",
  border: "transparent",
  textAlign: "end",
}));

export default function SelectSmall({ quantity, stock, id }: Props) {
  const [value, setValue] = React.useState<number>(quantity);

  const { changeQuantity } = React.useContext(CartContext);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(parseInt(event.target.value));
    changeQuantity(id, parseInt(event.target.value));
  };

  let menuItems = [];
  for (let i = 1; i <= stock; i++) {
    menuItems.push(
      <Options value={i}>
        <em>{i === stock ? "Max:" + i : i}</em>
      </Options>
    );
  }

  return (
    <Selects
      id="demo-select-small"
      value={value.toString()}
      onChange={handleChange}
    >
      <Options value={quantity}>
        <Typography
          fontSize={16}
          fontWeight={700}
          sx={{
            textDecoration: "underlined",
          }}
        >
          {quantity}
        </Typography>
      </Options>

      {menuItems}
    </Selects>
  );
}
