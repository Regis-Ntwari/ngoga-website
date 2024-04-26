import { Box, Button, Card, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { COLORS } from "../utils/colors";
import { ContactCard } from "../contact card/contactCard";

export const Contact = ({ reference }) => {
  const handleWhatsappClick = () => {
    window.location.href = "https://wa.me/250788916923";
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:aristongoga4@gmail.com";
  };
  return (
    <Grid
      container
      spacing={2}
      padding={{ xs: 1 }}
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Grid
        item
        xs={12}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Typography
          component="h3"
          ref={reference}
          variant="h3"
          style={{
            fontFamily: "Poppins",
            color: COLORS.FOREGOUND,
            textAlign: "center",
            fontWeight: "bolder",
            marginBottom: 10,
          }}
        >
          CONTACT US
        </Typography>
      </Grid>
      <Grid
        container
        spacing={2}
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={12} sm={6}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="space-between"
          >
            <div style={{ marginBottom: 20 }}>
              <ContactCard
                name="WhatsApp"
                onPressed={handleWhatsappClick}
                icon="whatsapp"
              />
            </div>
            <div style={{ marginBottom: 20 }}>
              <ContactCard
                name="Email"
                onPressed={handleEmailClick}
                icon="email"
              />
            </div>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          padding={{ xs: 1, md: 10 }}
          display="flex"
          width="100%"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Card
            style={{
              backgroundColor: COLORS.PRIMARY,
              display: "flex",
              flexDirection: "column",
              width: "80%",
              padding: 20,
            }}
          >
            <TextField
              id="name"
              label="Name"
              variant="outlined"
              style={{ marginBottom: 10 }}
            />
            <TextField
              id="phone"
              label="Phone"
              variant="outlined"
              style={{ marginBottom: 10 }}
            />
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              style={{ marginBottom: 10 }}
            />
            <TextField
              id="description"
              label="Description"
              multiline
              rows={4}
              style={{ marginBottom: 10 }}
            />
            <Button
              style={{
                backgroundColor: COLORS.FOREGOUND,
                color: COLORS.PRIMARY,
                marginBottom: 10,
              }}
            >
              SUBMIT
            </Button>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
};
