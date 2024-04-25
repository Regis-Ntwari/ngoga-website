import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { COLORS } from "../utils/colors";

export const Welcome = () => {
  return (
    <Grid container spacing={2}>
      <Grid container xs={12}>
        <Grid item xs={12}>
          <section
            style={{
              backgroundImage: `url(/house3.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              minHeight: "100vh",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              color: "white",
            }}
          >
            <Typography
              variant="h3"
              component="h3"
              style={{
                fontWeight: "bolder",
                fontFamily: "Poppins",
                textAlign: "center",
                marginTop: 30,
                color: COLORS.FOREGOUND,
              }}
            >
              WELCOME to DECONS Ltd
            </Typography>
            <Typography
              variant="h6"
              component="h6"
              style={{
                fontFamily: "Poppins",
                textAlign: "center",
                marginTop: 10,
                color: COLORS.PRIMARY,
              }}
            >
              With us, we transform ideas into iconic structures.
            </Typography>
            <Button
              style={{
                marginTop: 20,
                backgroundColor: COLORS.FOREGOUND,
                color: COLORS.PRIMARY,
              }}
            >
              CONTACT US
            </Button>
          </section>
        </Grid>
      </Grid>
    </Grid>
  );
};
