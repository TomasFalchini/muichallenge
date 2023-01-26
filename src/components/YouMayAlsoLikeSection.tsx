import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

import React from "react";

function YouMayAlsoLikeSection() {
  return (
    <Box>
      <Typography fontWeight={700} fontSize={24}>
        You might also like
      </Typography>
      <Grid container spacing={"24px"} sx={{ height: "434px" }}>
        <Grid item xs={12} md={6} lg={3}></Grid>
        <Grid item xs={12} md={6} lg={3}></Grid>
        <Grid item xs={12} md={6} lg={3}></Grid>
        <Grid item xs={12} md={6} lg={3}></Grid>
      </Grid>
    </Box>
  );
}

export default YouMayAlsoLikeSection;
