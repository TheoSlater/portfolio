"use client";
import { Box, Typography, Button, Grid } from "@mui/material";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <Box sx={{ width: "100%", height: "100vh", overflowX: "hidden" }}>
      <Navbar />
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
          onClick={() => {}}
        >
          View My Work
        </Button>

        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "80px",
            background: "transparent",
            clipPath:
              "polygon(100% 100%, 0% 100% , 0.00% 84.33%, 2.00% 84.11%, 4.00% 83.46%, 6.00% 82.38%, 8.00% 80.88%, 10.00% 78.99%, 12.00% 76.73%, 14.00% 74.12%, 16.00% 71.21%, 18.00% 68.03%, 20.00% 64.62%, 22.00% 61.02%, 24.00% 57.28%, 26.00% 53.45%, 28.00% 49.57%, 30.00% 45.70%, 32.00% 41.88%, 34.00% 38.17%, 36.00% 34.61%, 38.00% 31.24%, 40.00% 28.12%, 42.00% 25.27%, 44.00% 22.74%, 46.00% 20.56%, 48.00% 18.75%, 50.00% 17.35%, 52.00% 16.36%, 54.00% 15.80%, 56.00% 15.68%, 58.00% 15.99%, 60.00% 16.75%, 62.00% 17.92%, 64.00% 19.51%, 66.00% 21.48%, 68.00% 23.82%, 70.00% 26.50%, 72.00% 29.47%, 74.00% 32.71%, 76.00% 36.17%, 78.00% 39.80%, 80.00% 43.57%, 82.00% 47.41%, 84.00% 51.29%, 86.00% 55.16%, 88.00% 58.96%, 90.00% 62.64%, 92.00% 66.16%, 94.00% 69.48%, 96.00% 72.54%, 98.00% 75.32%, 100.00% 77.78%)",
            backgroundColor: "white",
          }}
        ></Box>
      </Box>
      <Box
        sx={{
          padding: { xs: "20px", sm: "40px", md: "60px" },
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
    </Box>
  );
}
