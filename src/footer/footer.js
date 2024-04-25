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
            fontFamily="Poppins"
            fontWeight="bolder"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              color: COLORS.FOREGOUND,
            }}
          >
            Address
          </Typography>
          <Typography fontFamily="Poppins" style={{ color: COLORS.FOREGOUND }}>
            Kigali, Rwanda
          </Typography>
          <Typography fontFamily="Poppins" style={{ color: COLORS.FOREGOUND }}>
            KK71 st
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
            fontFamily="Poppins"
            fontWeight="bolder"
            gutterBottom
            style={{ color: COLORS.FOREGOUND }}
          >
            Pages
          </Typography>
          <Typography fontFamily="Poppins" style={{ color: COLORS.FOREGOUND }}>
            Home
          </Typography>
          <Typography fontFamily="Poppins" style={{ color: COLORS.FOREGOUND }}>
            About Us
          </Typography>
          <Typography fontFamily="Poppins" style={{ color: COLORS.FOREGOUND }}>
            Our Work
          </Typography>
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
            fontFamily="Poppins"
            fontWeight="bolder"
            style={{ color: COLORS.FOREGOUND }}
          >
            Contact Information
          </Typography>
          <Typography fontFamily="Poppins" style={{ color: COLORS.FOREGOUND }}>
            Email: ngoga
          </Typography>
          <Typography fontFamily="Poppins" style={{ color: COLORS.FOREGOUND }}>
            Phone: +250788916923
          </Typography>
        </Grid>
      </Grid>
    </footer>
  );
};
