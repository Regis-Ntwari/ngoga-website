import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { COLORS } from "../utils/colors";

export const WhyChoseUs = () => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        margin: 10,
        padding: 10,
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
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
          WHY CHOOSE US?
        </Typography>
        <Typography
          variant="body1"
          component="p"
          style={{ fontFamily: "Poppins", textAlign: "center", paddingTop: 10 }}
        >
          At Decons Ltd, Construction design at your disposition. Civil
          Engineering, Road construction and any service at your disposal.
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        sx={{
          width: { xs: "100%", sm: "50%" },
          height: { xs: "200", sm: "auto" },
        }}
        image="/house.jpeg"
        title="House Design"
      />
    </Card>
  );
};
