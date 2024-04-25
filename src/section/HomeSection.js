import { Grid, Typography } from "@mui/material";
import React from "react";
import { COLORS } from "../utils/colors";

export const HomeSection = () => {
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
              minHeight: "100vh", // Adjust the height as needed
              display: "flex",
              justifyContent: "center",
              color: "white",
            }}
          >
            <div
              style={{
                textAlign: "center",
                display: "block",
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
                  display: "block",
                }}
              >
                WELCOME to DECONS Ltd
              </Typography>
            </div>
            <div style={{ textAlign: "center", display: "block" }}>
              <Typography
                variant="h6"
                component="h6"
                style={{
                  fontFamily: "Poppins",
                  textAlign: "center",
                  marginTop: 30,
                  color: COLORS.PRIMARY,
                  display: "block",
                }}
              >
                With us, we transform ideas into iconic structures.
              </Typography>
            </div>
          </section>
        </Grid>
      </Grid>
      {/* <Grid
        container
        xs={12}
        md={5}
        justifyContent="center"
        alignContent="center"
      >
        <Grid item xs={12}>
          <Typography
            variant="h3"
            component="h3"
            style={{
              fontWeight: "bolder",
              fontFamily: "Poppins",
              textAlign: "center",
              color: COLORS.FOREGOUND,
            }}
          >
            FOR A BETTER NATION
          </Typography>
          <Typography
            variant="h6"
            component="h6"
            style={{ fontFamily: "Poppins" }}
          >
            <div
              style={{
                flex: 1,
                textAlign: "center",
                paddingBottom: { xs: 5, md: 10 },
                justifyContent: "center",
              }}
            >
              <br />
              At Decons Ltd, Construction design at your disposition.
              <br /> Civil Engineering, Road construction and any service at
              your disposal.
            </div>
          </Typography>
        </Grid>
        <br />
        <br />
        <Box display="flex" justifyContent="center">
          <Button
            style={{
              marginTop: 10,
              padding: 10,
              backgroundColor: COLORS.FOREGOUND,
              color: "white",
              fontFamily: "Poppins",
            }}
          >
            CONTACT US
          </Button>
        </Box>
      </Grid> */}
    </Grid>
  );
};
