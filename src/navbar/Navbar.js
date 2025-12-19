import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { COLORS } from "../utils/colors";

const pages = ["About Us", "Our Work"];

export const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      style={{ 
        backgroundColor: COLORS.PRIMARY,
        overflowX: "hidden" // Prevent horizontal overflow
      }}
      elevation={2}
      position="sticky"
    >
      <Container 
        maxWidth="100%" // Changed from "xl" to prevent overflow
        sx={{
          px: { xs: 2, sm: 3, md: 4 }, // Responsive padding
          maxWidth: "100% !important", // Force full width
        }}
      >
        <Toolbar 
          disableGutters
          sx={{
            // Ensure content doesn't exceed viewport
            maxWidth: "100%",
            overflow: "hidden",
          }}
        >
          {/* Logo for desktop */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Poppins",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: COLORS.FOREGOUND,
              textDecoration: "none",
              flexShrink: 0, // Prevent shrinking
            }}
          >
            DECONS
          </Typography>

          {/* Mobile menu button and menu */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "flex-start",
              maxWidth: "100%",
            }}
          >
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ 
                color: COLORS.FOREGOUND,
                p: 1, // Add padding for better touch target
              }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                // Ensure menu doesn't cause horizontal scroll
                '& .MuiPaper-root': {
                  maxWidth: '100vw',
                  width: '200px', // Fixed width for mobile menu
                }
              }}
            >
              {pages.map((page) => (
                <MenuItem 
                  key={page} 
                  onClick={handleCloseNavMenu}
                  sx={{
                    py: 1.5,
                    px: 2,
                  }}
                >
                  <Typography
                    textAlign="left"
                    fontFamily="Poppins"
                    sx={{ 
                      color: COLORS.FOREGOUND,
                      width: '100%',
                    }}
                  >
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          
          {/* Logo for mobile */}
          <AdbIcon sx={{ 
            display: { xs: "flex", md: "none" }, 
            mr: 1,
            flexShrink: 0,
          }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "Poppins",
              fontWeight: 700,
              color: COLORS.FOREGOUND,
              textDecoration: "none",
              fontSize: { xs: "1.25rem", sm: "1.5rem" }, // Responsive font size
              flexShrink: 0,
            }}
          >
            DECONS
          </Typography>
          
          {/* Desktop navigation buttons */}
          <Box sx={{ 
            flexGrow: 1, 
            display: { xs: "none", md: "flex" },
            justifyContent: "flex-end",
            maxWidth: "100%",
          }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  mx: 1,
                  color: COLORS.FOREGOUND,
                  display: "block",
                  fontFamily: "Poppins",
                  fontWeight: 500,
                  fontSize: "1rem",
                  whiteSpace: "nowrap",
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  },
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};