import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import { COLORS } from "../utils/colors";
import { CarRental, DesignServices, Engineering, House, Search } from "@mui/icons-material";

export const WhatWeOffer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: 'column',
        alignItems: 'center',
        margin: { xs: 1, md: 2 },
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
      <Box sx={{ display: 'flex', flexDirection: {xs: 'column', md: 'row'}, }}>
        <Card sx={{ m: 1, width: {xs: '100%', md: 200}, height: 150 }}>
          <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Search sx={{ color: COLORS.FOREGOUND, width: 50, height: 50 }} />

            <Typography
              component="p"
              variant="p"
              textAlign='center'
              fontFamily="Poppins"
              marginTop={2}
            >
              Architectural Design & Feasibility Studies
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ m: 1, width: {xs: '100%', md: 200}, height: 150 }}>
          <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <DesignServices sx={{ color: COLORS.FOREGOUND, width: 50, height: 50 }} />

            <Typography
              component="p"
              variant="p"
              fontFamily="Poppins"
              textAlign='center'
              marginTop={2}
            >
              Interior Design
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ m: 1, width: {xs: '100%', md: 200}, height: 150 }}>
          <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Engineering sx={{ color: COLORS.FOREGOUND, width: 50, height: 50 }} />

            <Typography
              component="p"
              variant="p"
              textAlign='center'
              fontFamily="Poppins"
              marginTop={2}
            >
              Civil Engineering Works
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ m: 1, width: {xs: '100%', md: 200}, height: 150 }}>
          <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <House sx={{ color: COLORS.FOREGOUND, width: 50, height: 50 }} />

            <Typography
              component="p"
              variant="p"
              textAlign='center'
              fontFamily="Poppins"
              marginTop={2}
            >
              Property Management
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ m: 1, width: {xs: '100%', md: 200}, height: 150 }}>
          <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <CarRental sx={{ color: COLORS.FOREGOUND, width: 50, height: 50 }} />

            <Typography
              component="p"
              textAlign='center'
              variant="p"
              fontFamily="Poppins"
              marginTop={2}
            >
              Construction Machinery Rental
            </Typography>
          </CardContent>
        </Card>
      </Box>

    </Box>
  );
};
