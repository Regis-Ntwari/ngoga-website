import { useState, useEffect } from "react";
import {
  Typography,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const SliderContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  backgroundColor: theme.palette.grey[100],
  height: "100vh", // Use viewport height for responsiveness
  maxHeight: "700px", // Maximum height for larger screens
  minHeight: "400px", // Minimum height for smaller screens
  
  [theme.breakpoints.down("sm")]: {
    height: "60vh", // Adjust for mobile
    minHeight: "300px",
  },
}));

const SliderContent = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  textAlign: "center",
  color: theme.palette.text.primary,
  zIndex: 2,
  padding: theme.spacing(2),
  borderRadius: "8px",
  width: "90%", // Responsive width
  maxWidth: "800px", // Maximum width
  
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(1.5),
    width: "95%",
  },
}));

const sliderData = [
  {
    image: "house2.jpg",
    title: "Transform your Ideas into Iconic Structures",
  },
  {
    image: "house5.jpg",
    title: "Transform your Ideas into Iconic Structures",
  },
  {
    image: "house6.jpg",
    title: "Transform your Ideas into Iconic Structures",
  },
];

export const Welcome = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % sliderData.length);
        
        setTimeout(() => {
          setIsTransitioning(false);
        }, 50);
      }, 500);
    }, 5000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <Box sx={{ overflow: "hidden" }}> {/* Prevent horizontal scrolling */}
      <SliderContainer>
        {/* Previous slide for cross-fade effect */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${sliderData[(currentSlide - 1 + sliderData.length) % sliderData.length].image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: isTransitioning ? 0 : 1,
            transition: "opacity 0.8s ease-in-out",
            width: "100%", // Ensure it covers full width
          }}
        />
        
        {/* Current slide */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${sliderData[currentSlide].image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: isTransitioning ? 0 : 1,
            transition: "opacity 0.8s ease-in-out",
            width: "100%", // Ensure it covers full width
          }}
        />
        
        {/* Optional overlay for better text readability */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.3)", // Adjust opacity as needed
            zIndex: 1,
          }}
        />
        
        <SliderContent>
          <Typography
            variant={isMobile ? "h4" : "h2"} // Responsive font size
            component="h1"
            sx={{ 
              color: "white", 
              fontWeight: 'bold',
              opacity: isTransitioning ? 0 : 1,
              transition: "opacity 0.8s ease-in-out",
              textShadow: "2px 2px 4px rgba(0,0,0,0.5)", // Better readability
              fontSize: {
                xs: "1.5rem", // Extra small screens
                sm: "2rem",   // Small screens
                md: "2.5rem", // Medium screens
                lg: "3rem",   // Large screens
              },
              lineHeight: {
                xs: 1.3,
                md: 1.2,
              },
              mb: 2,
            }}
          >
            {sliderData[currentSlide].title.toUpperCase()}
          </Typography>
          
          {/* Optional subtitle/button for mobile */}
          {isMobile && (
            <Typography
              variant="body2"
              sx={{
                color: "white",
                opacity: isTransitioning ? 0 : 1,
                transition: "opacity 0.8s ease-in-out",
                textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
              }}
            >
              Discover our architectural solutions
            </Typography>
          )}
        </SliderContent>
      </SliderContainer>
    </Box>
  );
};