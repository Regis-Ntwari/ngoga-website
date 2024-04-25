import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { COLORS } from "../utils/colors";

export const WhatWeOffer = () => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        margin: { xs: 1, md: 10 },
        padding: { xs: 2, md: 10 },
      }}
    >
      <CardMedia
        component="img"
        sx={{
          width: { xs: "100%", sm: "50%" },
          height: { xs: "200", sm: "auto" },
        }}
        image="/house.jpeg"
        title="House Design"
      />
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
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
          WHAT WE OFFER
        </Typography>
        <ul>
          <li>
            <Typography
              component="p"
              variant="p"
              fontFamily="Poppins"
              marginBottom={3}
            >
              Architectural Design & Feasibility Studies
            </Typography>
          </li>
          <li>
            <Typography
              component="p"
              variant="p"
              fontFamily="Poppins"
              marginBottom={3}
            >
              Interior Design
            </Typography>
          </li>
          <li>
            <Typography
              component="p"
              variant="p"
              fontFamily="Poppins"
              marginBottom={3}
            >
              Civil Engineering Works
            </Typography>
          </li>
          <li>
            <Typography
              component="p"
              variant="p"
              fontFamily="Poppins"
              marginBottom={3}
            >
              Construction Machinery Rental
            </Typography>
          </li>
          <li>
            <Typography
              component="p"
              variant="p"
              fontFamily="Poppins"
              marginBottom={3}
            >
              Property Management
            </Typography>
          </li>
        </ul>
      </CardContent>
    </Card>
  );
};
