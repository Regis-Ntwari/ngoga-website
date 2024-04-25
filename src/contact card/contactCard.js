import { Email, WhatsApp } from "@mui/icons-material";
import { Button, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import { COLORS } from "../utils/colors";

export const ContactCard = ({ name, onPressed, icon }) => {
  return (
    <Card style={{ padding: 20 }}>
      <CardContent
        style={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {icon === "whatsapp" ? (
          <WhatsApp style={{ color: COLORS.FOREGOUND }} />
        ) : (
          <Email style={{ color: COLORS.FOREGOUND }} />
        )}
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          fontFamily="Poppins"
        >
          {name}
        </Typography>
        <Button
          onClick={onPressed}
          style={{ backgroundColor: COLORS.FOREGOUND, color: COLORS.PRIMARY }}
        >
          SEND MESSAGE
        </Button>
      </CardContent>
    </Card>
  );
};
