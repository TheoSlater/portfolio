"use client";
import { Box, Typography, Button, Grid } from "@mui/material";
import Navbar from "../components/Navbar";

export default function Home() {
  const handleScroll = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      // Scroll to the section with the desired offset to center it
      section.scrollIntoView({
        behavior: "smooth",
        block: "center", // This aligns the section in the center of the viewport
      });
    }
  };

  return (
    <Box sx={{ width: "100%", height: "100vh", overflowX: "hidden" }}>
      <Navbar onNavClick={handleScroll} />

      <Box
        sx={{
          width: "100%",
          height: "60vh",
          background: "linear-gradient(135deg, #243447, #1A2B3C)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: { xs: "20px", sm: "40px", md: "60px" },
          boxSizing: "border-box",
          position: "relative",
        }}
      >
        <Typography
          fontSize={{ xs: "40px", sm: "50px", md: "60px" }}
          color={"white"}
          fontWeight={"bold"}
          lineHeight={1.2}
        >
          I&apos;m Theo.
        </Typography>
        <Typography
          fontSize={{ xs: "18px", sm: "22px", md: "26px" }}
          color={"white"}
          fontWeight={"300"}
          mt={2}
        >
          Developer, Designer, and Creator of Unique Digital Experiences.
        </Typography>
        <Button
          variant="contained"
          sx={{
            mt: 3,
            fontSize: { xs: "14px", sm: "16px" },
            padding: { xs: "8px 16px", sm: "10px 20px" },
            backgroundColor: "#FF6B6B",
            color: "white",
            "&:hover": {
              backgroundColor: "#D95A5A",
            },
          }}
          onClick={() => handleScroll("projects")}
        >
          View My Work
        </Button>
      </Box>

      <Box
        id="about"
        sx={{
          padding: { xs: "20px", sm: "40px", md: "60px" },
          paddingTop: "80px", // Add space for the sticky navbar
          bgcolor: "background.default",
        }}
      >
        <Typography variant="h4" fontWeight="bold" color="text.primary" mb={3}>
          About Me
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={4}>
          I&apos;m passionate about coding and designing user-friendly
          applications. I enjoy working across the tech stack and bringing
          innovative ideas to life.
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                bgcolor: "primary.main",
                color: "white",
                padding: 2,
                borderRadius: 2,
                textAlign: "center",
              }}
            >
              <Typography variant="h6" fontWeight="bold">
                Web Development
              </Typography>
              <Typography variant="body2">
                Experienced in Next.js, TypeScript, and Express.js
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                bgcolor: "primary.main",
                color: "white",
                padding: 2,
                borderRadius: 2,
                textAlign: "center",
              }}
            >
              <Typography variant="h6" fontWeight="bold">
                Data Science
              </Typography>
              <Typography variant="body2">
                Proficient in Python and machine learning
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                bgcolor: "primary.main",
                color: "white",
                padding: 2,
                borderRadius: 2,
                textAlign: "center",
              }}
            >
              <Typography variant="h6" fontWeight="bold">
                UI/UX Design
              </Typography>
              <Typography variant="body2">
                Focused on user-centric design and accessible interfaces
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box
        id="projects"
        sx={{
          padding: { xs: "20px", sm: "40px", md: "60px" },
          paddingTop: "80px", // Adjust padding for sticky navbar here as well
          bgcolor: "background.default",
        }}
      >
        <Typography variant="h4" fontWeight="bold" color="text.primary" mb={3}>
          My Projects
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                bgcolor: "primary.main",
                color: "white",
                padding: 2,
                borderRadius: 2,
                textAlign: "center",
              }}
            >
              <Typography variant="h6" fontWeight="bold">
                Project 1
              </Typography>
              <Typography variant="body2">
                Description of your project, highlighting the main technologies
                used.
              </Typography>
              <Button
                variant="contained"
                sx={{
                  mt: 2,
                  fontSize: { xs: "14px", sm: "16px" },
                  backgroundColor: "#FF6B6B",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "#D95A5A",
                  },
                }}
                onClick={() => {}}
              >
                View Project
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                bgcolor: "primary.main",
                color: "white",
                padding: 2,
                borderRadius: 2,
                textAlign: "center",
              }}
            >
              <Typography variant="h6" fontWeight="bold">
                Project 2
              </Typography>
              <Typography variant="body2">
                Description of your project, highlighting the main technologies
                used.
              </Typography>
              <Button
                variant="contained"
                sx={{
                  mt: 2,
                  fontSize: { xs: "14px", sm: "16px" },
                  backgroundColor: "#FF6B6B",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "#D95A5A",
                  },
                }}
                onClick={() => {}}
              >
                View Project
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                bgcolor: "primary.main",
                color: "white",
                padding: 2,
                borderRadius: 2,
                textAlign: "center",
              }}
            >
              <Typography variant="h6" fontWeight="bold">
                Project 3
              </Typography>
              <Typography variant="body2">
                Description of your project, highlighting the main technologies
                used.
              </Typography>
              <Button
                variant="contained"
                sx={{
                  mt: 2,
                  fontSize: { xs: "14px", sm: "16px" },
                  backgroundColor: "#FF6B6B",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "#D95A5A",
                  },
                }}
                onClick={() => {}}
              >
                View Project
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
