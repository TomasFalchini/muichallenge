import React from "react";
import { styled } from "@mui/material/styles";

const Image = styled("img")(({ theme }) => ({
  height: 48,

  width: 172,
  border: "solid black 1px",
}));

function Logo() {
  return (
    <Image
      sx={{
        display: { xs: "none", sm: "inline" },

        minWidth: { xs: "102px", md: "172px" },
      }}
      className=""
      src="./LOGO2.jpg"
      alt=""
    />
  );
}

export default Logo;
