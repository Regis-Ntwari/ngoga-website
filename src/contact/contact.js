import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { COLORS } from "../utils/colors";
import { CustomCard } from "../card/custom_card";

export const Contact = () => {
  return (
    <Grid container spacing={2} padding={10}>
      <Grid item xs={12}>
        <Typography
          component="h3"
          variant="h3"
          style={{
            fontFamily: "Poppins",
            color: COLORS.FOREGOUND,
            textAlign: "center",
          }}
        >
          CONTACT US
        </Typography>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Box display="flex" flexDirection="column">
            <CustomCard />
            <CustomCard />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} padding={10}>
          <Box component="form" display="flex" flexDirection="column">
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
            />
            <TextField
              id="outlined-multiline-static"
              label="Multiline"
              multiline
              rows={4}
            />
            <Button
              style={{
                backgroundColor: COLORS.FOREGOUND,
                color: COLORS.PRIMARY,
              }}
            >
              SUBMIT
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};
