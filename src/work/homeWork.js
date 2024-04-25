import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { COLORS } from "../utils/colors";
import { CustomCard } from "../card/custom_card";

export const HomeWork = () => {
  const projects = ["", "", "", "", "", ""];
  return (
    <Grid container spacing={2} paddingTop={10}>
      <Grid container spacing={2}>
        <Grid item xs={0} sm={4}></Grid>
        <Grid item xs={12} sm={4}>
          <Typography
            textAlign="center"
            color={COLORS.FOREGOUND}
            variant="h2"
            component="h2"
            fontWeight="bold"
            fontFamily="Poppins"
          >
            OUR WORK
          </Typography>
        </Grid>
        <Grid item xs={0} sm={4}></Grid>
      </Grid>
      {projects.map((project) => (
        <Grid item xs={12} sm={4} justifyContent="center">
          <Box display="flex" justifyContent="center">
            <CustomCard />
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};
