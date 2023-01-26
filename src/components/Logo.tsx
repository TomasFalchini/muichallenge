import React from "react";
import { styled } from "@mui/material/styles";

const Image = styled("img")(({ theme }) => ({
  margin: 20,
  marginLeft: 92,
  height: 48,
  width: 172,
  border: "solid black 1px",
}));

function Logo() {
  return <Image className="" src="./LOGO2.jpg" alt="" />;
}

export default Logo;
