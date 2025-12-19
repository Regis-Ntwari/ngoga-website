import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { COLORS } from "../utils/colors";

export const WhyChoseUs = () => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        margin: { xs: 1, md: 5 },
        padding: {xs: 1, md: 5}
      }}
    >
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
            width: "100%",
          }}
        >
          WHY CHOOSE US?
        </Typography>
        <ul>
          <li>
            <Typography
              component="p"
              variant="p"
              fontFamily="Poppins"
              marginBottom={3}
            >
              We provide integrated architectural and civil engineering
              solutions.
            </Typography>
          </li>
          <li>
            <Typography
              component="p"
              variant="p"
              fontFamily="Poppins"
              marginBottom={3}
            >
              We prioritize quality throughout the project, from concept
              creation to final execution.
            </Typography>
          </li>
          <li>
            <Typography
              component="p"
              variant="p"
              fontFamily="Poppins"
              marginBottom={3}
            >
              We strive for unique and forward-thinking designs that incorporate
              the most recent trends, technologies, and sustainable practices.
            </Typography>
          </li>
          <li>
            <Typography
              component="p"
              variant="p"
              fontFamily="Poppins"
              marginBottom={3}
            >
              We deliver projects on schedule and within budget.
            </Typography>
          </li>
          <li>
            <Typography
              component="p"
              variant="p"
              fontFamily="Poppins"
              marginBottom={3}
            >
              We value open communication and collaboration with clients.
            </Typography>
          </li>
        </ul>
      </CardContent>
      <CardMedia
        component="img"
        sx={{
          width: { xs: "100%", sm: "50%" },
          height: { xs: "200", sm: "auto" },
        }}
        image="/house4.jpg"
        title="House Design"
      />
    </Card>
  );
};
