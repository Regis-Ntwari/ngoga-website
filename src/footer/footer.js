import React from "react";
import { Grid, Typography } from "@mui/material";
import { COLORS } from "../utils/colors";

export const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: COLORS.PRIMARY,
        color: COLORS.PRIMARY,
        padding: 10,
      }}
    >
      <Grid container spacing={3}>
        <Grid
          item
          xs={12}
          sm={4}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Typography
            variant="h6"
            gutterBottom
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            Address
          </Typography>
          <Typography>123 Street Name</Typography>
          <Typography>City, State, Zip Code</Typography>
        </Grid>
        {/* Tabs column */}
        <Grid
          item
          xs={12}
          sm={4}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Typography variant="h6" gutterBottom>
            Tabs
          </Typography>
          <Typography>Tab 1</Typography>
          <Typography>Tab 2</Typography>
          <Typography>Tab 3</Typography>
        </Grid>
        {/* Contact column */}
        <Grid
          item
          xs={12}
          sm={4}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Typography variant="h6" gutterBottom>
            Contact Information
          </Typography>
          <Typography>Email: example@example.com</Typography>
          <Typography>Phone: +1234567890</Typography>
        </Grid>
      </Grid>
    </footer>
  );
};
