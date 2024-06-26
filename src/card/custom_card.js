import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

export const CustomCard = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/house.jpeg"
        title="House Design"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          fontFamily="Poppins"
        >
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary" fontFamily="Poppins">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </Card>
  );
};
