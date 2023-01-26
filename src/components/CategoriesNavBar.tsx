import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import Typography from "@mui/material/Typography";

const Text = styled(Typography)(({ theme }) => ({
  color: "secondary",
  margin: 12,
  "&:hover": {
    textDecoration: "underline",
    cursor: "pointer",
  },
}));

function CategoriesNavBar() {
  return (
    <AppBar
      position="static"
      color="primary"
      sx={{ boxShadow: "none", height: 64 }}
    >
      <Toolbar>
        <Box sx={{ flexGrow: 0 }} />
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "space-between",
            margin: 24,
            marginLeft: 9.2,
          }}
        >
          <Text>All products</Text>
          <Text>Packaging</Text>
          <Text>Drinkware</Text>
          <Text>Apparel</Text>
          <Text>Notebooks</Text>
          <Text>Backpacks</Text>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default CategoriesNavBar;
