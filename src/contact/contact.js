import React, { useState } from "react";
import { 
  Box, 
  Button, 
  Card, 
  Grid, 
  TextField, 
  Typography,
  Fade,
  Grow,
  Paper,
  useTheme,
  useMediaQuery,
  alpha 
} from "@mui/material";
import { COLORS } from "../utils/colors";
import { ContactCard } from "../contact card/contactCard";
import SendIcon from "@mui/icons-material/Send";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export const Contact = ({ reference }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    description: "",
  });
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", phone: "", email: "", description: "" });
  };

  const handleWhatsappClick = () => {
    window.open("https://wa.me/250788916923", "_blank");
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:aristongoga4@gmail.com";
  };

  const contactMethods = [
    {
      name: "WhatsApp",
      icon: <WhatsAppIcon sx={{ fontSize: 40 }} />,
      onPressed: handleWhatsappClick,
      color: "#116931ff",
      description: "Chat with us instantly",
    },
    {
      name: "Email",
      icon: <EmailIcon sx={{ fontSize: 40 }} />,
      onPressed: handleEmailClick,
      color: "#EA4335",
      description: "Send us an email",
    },
    {
      name: "Call Us",
      icon: <PhoneIcon sx={{ fontSize: 40 }} />,
      onPressed: () => window.location.href = "tel:+250788916923",
      color: "#34B7F1",
      description: "+250 788 916 923",
    },
  ];

  return (
    <Box
      sx={{
        padding: { xs: 3, md: 3 },
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Grid container spacing={4} justifyContent="center">
        {/* Header */}
        <Grid item xs={12}>
          <Box sx={{ textAlign: "center", mb: 2 }}>
            <Typography
              component="h2"
              ref={reference}
              variant="h2"
              sx={{
                fontFamily: "Poppins",
                color: COLORS.FOREGOUND,
                fontWeight: 800,
                fontSize: { xs: "2.5rem", md: "3.5rem" },
                position: "relative",
                display: "inline-block",
                "&:after": {
                  content: '""',
                  position: "absolute",
                  bottom: -10,
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "100px",
                  height: "4px",
                  backgroundColor: COLORS.FOREGOUND,
                  borderRadius: "2px",
                }
              }}
            >
              GET IN TOUCH
            </Typography>
            <Typography
              variant="h6"
              textAlign='center'
              sx={{
                fontFamily: "Poppins",
                color: alpha(COLORS.BACKGROUND, 0.8),
                mx: 2,
                my: 3,
                lineHeight: 1.6,
                textAlign: 'center'
              }}
            >
              Have a project in mind? Let's discuss how we can bring your vision to life.
            </Typography>
          </Box>
        </Grid>

        {/* Contact Methods */}
        <Grid item xs={12} md={5}>
          <Box sx={{ pr: { md: 4 } }}>
            <Typography
              variant="h5"
              sx={{
                fontFamily: "Poppins",
                color: COLORS.FOREGOUND,
                fontWeight: 600,
                mb: 4,
                textAlign: 'center'
              }}
            >
              Quick Contact
            </Typography>
            
            <Grid container spacing={3}>
              {contactMethods.map((method, index) => (
                <Grow in timeout={(index + 1) * 300} key={method.name}>
                  <Grid item xs={12} sm={6} md={12}>
                    <Paper
                      elevation={0}
                      sx={{
                        p: 3,
                        borderRadius: 3,
                        border: `2px solid ${alpha(method.color, 0.1)}`,
                        backgroundColor: alpha(method.color, 0.05),
                        transition: "all 0.3s ease",
                        cursor: "pointer",
                        "&:hover": {
                          transform: "translateY(-5px)",
                          boxShadow: `0 10px 30px ${alpha(method.color, 0.2)}`,
                          borderColor: method.color,
                        },
                      }}
                      onClick={method.onPressed}
                    >
                      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                        <Box
                          sx={{
                            p: 2,
                            borderRadius: "50%",
                            backgroundColor: alpha(method.color, 0.1),
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          {method.icon}
                        </Box>
                        <Box>
                          <Typography
                            variant="h6"
                            sx={{
                              fontFamily: "Poppins",
                              color: COLORS.BACKGROUND,
                              fontWeight: 600,
                              mb: 0.5,
                            }}
                          >
                            {method.name}
                          </Typography>
                          <Typography
                            sx={{
                              fontFamily: "Poppins",
                              color: alpha(COLORS.BACKGROUND, 0.7),
                              fontSize: "0.9rem",
                            }}
                          >
                            {method.description}
                          </Typography>
                        </Box>
                      </Box>
                    </Paper>
                  </Grid>
                </Grow>
              ))}
            </Grid>

            {/* Office Info */}
            <Paper
              elevation={0}
              sx={{
                p: 4,
                mt: 4,
                borderRadius: 3,
                backgroundColor: alpha(COLORS.BACKGROUND, 0.05),
                border: `2px solid ${alpha(COLORS.BACKGROUND, 0.1)}`,
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
                <LocationOnIcon sx={{ color: COLORS.ACCENT, fontSize: 30 }} />
                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: "Poppins",
                      color: COLORS.BACKGROUND,
                      fontWeight: 600,
                    }}
                  >
                    Our Office
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      color: alpha(COLORS.BACKGROUND, 0.7),
                    }}
                  >
                    Kigali, Rwanda · KK71 Street
                  </Typography>
                </Box>
              </Box>
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  color: alpha(COLORS.BACKGROUND, 0.6),
                  fontSize: "0.9rem",
                  lineHeight: 1.6,
                }}
              >
                Visit our office or schedule a meeting with our team to discuss your project requirements.
              </Typography>
            </Paper>
          </Box>
        </Grid>

        {/* Contact Form */}
        <Grid item xs={12} md={7}>
          <Fade in timeout={800}>
            <Card
              sx={{
                backgroundColor: "#fff",
                borderRadius: 4,
                p: { xs: 3, md: 5 },
                boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
                border: `1px solid ${alpha(COLORS.PRIMARY, 0.1)}`,
              }}
            >
              <Typography
                variant="h5"
                textAlign='center'
                sx={{
                  fontFamily: "Poppins",
                  color: COLORS.FOREGOUND,
                  fontWeight: 600,
                  mb: 4,
                }}
              >
                Send us a Message
              </Typography>
              
              <Box component="form" onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      id="name"
                      label="Your Name"
                      variant="outlined"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "&:hover fieldset": {
                            borderColor: COLORS.ACCENT,
                          },
                        },
                        "& .MuiInputLabel-root.Mui-focused": {
                          color: COLORS.ACCENT,
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      id="phone"
                      label="Phone Number"
                      variant="outlined"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "&:hover fieldset": {
                            borderColor: COLORS.ACCENT,
                          },
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      id="email"
                      label="Email Address"
                      type="email"
                      variant="outlined"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "&:hover fieldset": {
                            borderColor: COLORS.ACCENT,
                          },
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      id="description"
                      label="Project Details"
                      multiline
                      rows={5}
                      value={formData.description}
                      onChange={handleChange}
                      placeholder="Tell us about your project..."
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "&:hover fieldset": {
                            borderColor: COLORS.ACCENT,
                          },
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      endIcon={<SendIcon />}
                      sx={{
                        backgroundColor: COLORS.PRIMARY,
                        color: COLORS.FOREGOUND,
                        padding: "12px 40px",
                        borderRadius: "50px",
                        fontFamily: "Poppins",
                        fontWeight: 600,
                        fontSize: "1.1rem",
                        textTransform: "none",
                        "&:hover": {
                          backgroundColor: alpha(COLORS.PRIMARY, 0.9),
                          transform: "translateY(-2px)",
                          boxShadow: `0 10px 25px ${alpha(COLORS.PRIMARY, 0.3)}`,
                        },
                        transition: "all 0.3s ease",
                      }}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Card>
          </Fade>
        </Grid>
      </Grid>
    </Box>
  );
};