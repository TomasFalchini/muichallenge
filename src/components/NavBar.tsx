import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import SearchIcon from "@mui/icons-material/Search";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

const Image = styled("img")(({ theme }) => ({
  margin: 20,
  marginLeft: 92,
  height: 48,
  width: 172,
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: 50,
  width: 696,
  height: 40,
  backgroundColor: theme.palette.common.white,
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.85),
  },

  margin: 24,
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "secondary",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },
  width: "100%",
}));

export default function NavBar() {
  return (
    <AppBar position="static" color="secondary">
      <Toolbar>
        <Image className="" src="./LOGO2.jpg" alt="" />
        <Search>
          <SearchIconWrapper>
            <SearchIcon color="secondary" fontSize="medium" />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Searh products"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
        <Box sx={{ flexGrow: 1 }} />
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            marginRight: 9.2,
          }}
        >
          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
            sx={{ display: "flex", gap: 1.5 }}
          >
            <PersonOutlineOutlinedIcon />
            <Typography>Sign in</Typography>
          </IconButton>

          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
            sx={{ display: "flex", gap: 1.5 }}
          >
            <Badge badgeContent={17} color="primary">
              <LocalMallOutlinedIcon />
            </Badge>
            <Typography>Cart</Typography>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
