import * as React from "react";

import MenuItem from "@mui/material/MenuItem";

import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Box } from "@mui/material";
import { CartContext } from "../hooks/CartContext";

interface Props {
  quantity: number;
  stock: number;
  id: number;
}

export default function SelectSmall({ quantity, stock, id }: Props) {
  const [value, setValue] = React.useState<number>(quantity);

  const { changeQuantity } = React.useContext(CartContext);

  const handleChange = (event: SelectChangeEvent) => {
    setValue(parseInt(event.target.value));
    changeQuantity(id, parseInt(event.target.value));
  };

  let menuItems = [];
  for (let i = 0; i < stock; i++) {
    menuItems.push(
      <MenuItem value={i}>
        <em>{i}</em>
      </MenuItem>
    );
  }

  return (
    <Select
      id="demo-select-small"
      value={value.toString()}
      onChange={handleChange}
      sx={{
        border: 0,
        padding: 0,
        height: 16,
        outline: "none",
        fontSize: 14,
      }}
    >
      <MenuItem value={quantity}>
        <em>{quantity}</em>
      </MenuItem>
      {menuItems}
    </Select>
  );
}
