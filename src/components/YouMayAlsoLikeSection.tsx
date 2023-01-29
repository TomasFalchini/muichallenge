import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

import React from "react";
import AlsoLikeCard from "./AlsoLikeCard";

function YouMayAlsoLikeSection() {
  return (
    <Box sx={{ padding: { xs: "24px", md: "92px" } }}>
      <Typography fontWeight={700} fontSize={24} marginBottom={"24px"}>
        You might also like
      </Typography>
      <Grid container spacing={"24px"} justifyItems="center">
        <Grid item xs={12} sm={6} lg={3} justifySelf="center">
          <AlsoLikeCard
            title="Unisex Short Sleeve T-Shirt"
            priceRange={[10, 25]}
            minimum={24}
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <AlsoLikeCard
            title="Unisex Short Sleeve T-Shirt"
            priceRange={[10, 25]}
            minimum={24}
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <AlsoLikeCard
            title="Unisex Short Sleeve T-Shirt"
            priceRange={[10, 25]}
            minimum={24}
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          <AlsoLikeCard
            title="Unisex Short Sleeve T-Shirt"
            priceRange={[10, 25]}
            minimum={24}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default YouMayAlsoLikeSection;
