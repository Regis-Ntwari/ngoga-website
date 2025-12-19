import React from "react";
import { 
  Grid, 
  Typography, 
  Box, 
  IconButton,
  Divider,
  useTheme,
  useMediaQuery, 
  alpha
} from "@mui/material";
import { COLORS } from "../utils/colors";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

export const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        backgroundColor: COLORS.PRIMARY,
        color: COLORS.FOREGOUND,
        padding: { xs: 3, md: 6 },
        position: "relative",
        overflow: "hidden",
        "&:before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "4px",
          background: `linear-gradient(90deg, ${COLORS.ACCENT}, ${COLORS.FOREGOUND})`,
        }
      }}
    >
      <Grid container spacing={4} justifyContent="center">
        {/* Address Column */}
        <Grid item xs={12} sm={6} md={3}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
              mb: 3,
            }}
          >
            <Typography
              variant="h6"
              gutterBottom
              fontFamily="Poppins"
              fontWeight={700}
              sx={{
                color: COLORS.FOREGOUND,
                display: "flex",
                alignItems: "center",
                gap: 1,
                mb: 2,
              }}
            >
              
              Address
            </Typography>
            <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
              <Typography 
                fontFamily="Poppins" 
                sx={{ 
                  color: COLORS.BACKGROUND,
                  mb: 1,
                  "&:hover": { color: COLORS.FOREGOUND }
                }}
              >
                Kigali, Rwanda
              </Typography>
              <Typography 
                fontFamily="Poppins" 
                sx={{ 
                  color: COLORS.BACKGROUND,
                  "&:hover": { color: COLORS.FOREGOUND }
                }}
              >
                KK71 Street
              </Typography>
            </Box>
          </Box>
        </Grid>

        {/* Pages Column */}
        <Grid item xs={12} sm={6} md={3}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
              mb: 3,
            }}
          >
            <Typography
              variant="h6"
              fontFamily="Poppins"
              fontWeight={700}
              gutterBottom
              sx={{
                color: COLORS.FOREGOUND,
                mb: 2,
                position: "relative",
                "&:after": {
                  content: '""',
                  position: "absolute",
                  bottom: -8,
                  left: 0,
                  width: "40px",
                  height: "3px",
                  backgroundColor: COLORS.ACCENT,
                }
              }}
            >
              Quick Links
            </Typography>
            <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
              {["Home", "About Us", "Our Work", "Services", "Contact"].map((item) => (
                <Typography
                  key={item}
                  fontFamily="Poppins"
                  sx={{
                    color: COLORS.BACKGROUND,
                    mb: 1.5,
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      color: COLORS.FOREGOUND,
                      transform: "translateX(5px)",
                    }
                  }}
                >
                  {item}
                </Typography>
              ))}
            </Box>
          </Box>
        </Grid>

        {/* Contact Column */}
        <Grid item xs={12} sm={6} md={3}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
              mb: 3,
            }}
          >
            <Typography
              variant="h6"
              gutterBottom
              fontFamily="Poppins"
              fontWeight={700}
              sx={{
                color: COLORS.FOREGOUND,
                mb: 2,
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              Contact Us
            </Typography>
            <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2, gap: 1 }}>
                <EmailIcon sx={{ color: COLORS.ACCENT, fontSize: 20 }} />
                <Typography 
                  fontFamily="Poppins" 
                  sx={{ 
                    color: COLORS.BACKGROUND,
                    "&:hover": { color: COLORS.FOREGOUND }
                  }}
                >
                  aristongoga4@gmail.com
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <PhoneIcon sx={{ color: COLORS.ACCENT, fontSize: 20 }} />
                <Typography 
                  fontFamily="Poppins" 
                  sx={{ 
                    color: COLORS.BACKGROUND,
                    "&:hover": { color: COLORS.FOREGOUND }
                  }}
                >
                  +250 788 916 923
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>

        {/* Social Media Column */}
        <Grid item xs={12} sm={6} md={3}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "flex-start" },
            }}
          >
            <Typography
              variant="h6"
              gutterBottom
              fontFamily="Poppins"
              fontWeight={700}
              sx={{
                color: COLORS.FOREGOUND,
                mb: 2,
              }}
            >
              Follow Us
            </Typography>
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
              {[
                { icon: <FacebookIcon />, color: "#1877F2" },
                { icon: <InstagramIcon />, color: "#E4405F" },
                { icon: <TwitterIcon />, color: "#1DA1F2" },
                { icon: <LinkedInIcon />, color: "#0A66C2" },
              ].map((social, index) => (
                <IconButton
                  key={index}
                  sx={{
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    color: social.color,
                    "&:hover": {
                      backgroundColor: social.color,
                      color: "#fff",
                      transform: "translateY(-3px)",
                      boxShadow: `0 5px 15px ${social.color}40`,
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Box>
        </Grid>
      </Grid>

      <Divider sx={{ my: 4, backgroundColor: "rgba(255, 255, 255, 0.1)" }} />

      {/* Copyright */}
      <Box sx={{ textAlign: "center", mt: 3 }}>
        <Typography
          fontFamily="Poppins"
          sx={{
            color: COLORS.BACKGROUND,
            fontSize: "0.9rem",
          }}
        >
          © {new Date().getFullYear()} DECONS. All rights reserved.
        </Typography>
        <Typography
          fontFamily="Poppins"
          sx={{
            color: alpha(COLORS.BACKGROUND, 0.5),
            fontSize: "0.8rem",
            mt: 1,
          }}
        >
          Transforming ideas into iconic structures
        </Typography>
      </Box>
    </Box>
  );
};