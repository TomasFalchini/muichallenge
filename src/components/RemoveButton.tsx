import React, { useContext } from "react";
import { CartContext } from "../hooks/CartContext";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

import { Button, Typography } from "@mui/material";

interface Props {
  id: number;
}

function RemoveButton({ id }: Props) {
  const { removeItem } = useContext(CartContext);

  const remove = () => {
    removeItem(id);
  };

  return (
    <Button
      disableElevation
      color="secondary"
      sx={{
        padding: 0,
        fontSize: "12px",
      }}
      onClick={remove}
    >
      <DeleteOutlineIcon />

      <Typography fontSize={12} fontWeight={600}>
        Remove
      </Typography>
    </Button>
  );
}

export default RemoveButton;
