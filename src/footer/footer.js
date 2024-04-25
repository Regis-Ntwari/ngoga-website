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
            alignItems: "center",
          }}
        >
          <Typography
            variant="h6"
            gutterBottom
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              color: COLORS.FOREGOUND,
            }}
          >
            Address
          </Typography>
          <Typography style={{ color: COLORS.FOREGOUND }}>
            123 Street Name
          </Typography>
          <Typography style={{ color: COLORS.FOREGOUND }}>
            City, State, Zip Code
          </Typography>
        </Grid>
        {/* Tabs column */}
        <Grid
          item
          xs={12}
          sm={4}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h6"
            gutterBottom
            style={{ color: COLORS.FOREGOUND }}
          >
            Tabs
          </Typography>
          <Typography style={{ color: COLORS.FOREGOUND }}>Tab 1</Typography>
          <Typography style={{ color: COLORS.FOREGOUND }}>Tab 2</Typography>
          <Typography style={{ color: COLORS.FOREGOUND }}>Tab 3</Typography>
        </Grid>
        {/* Contact column */}
        <Grid
          item
          xs={12}
          sm={4}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h6"
            gutterBottom
            style={{ color: COLORS.FOREGOUND }}
          >
            Contact Information
          </Typography>
          <Typography style={{ color: COLORS.FOREGOUND }}>
            Email: example@example.com
          </Typography>
          <Typography style={{ color: COLORS.FOREGOUND }}>
            Phone: +1234567890
          </Typography>
        </Grid>
      </Grid>
    </footer>
  );
};
