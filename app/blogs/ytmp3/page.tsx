import { Container, Box, Typography, Button } from "@mui/material";
import Navbar from "@/app/components/Navbar";

export default function Ytmp3() {
  const currentDate = new Date();
  const dateString = `${currentDate.getDate()} · ${currentDate.toLocaleString(
    "default",
    { month: "long" }
  )} · ${currentDate.getFullYear()}`;

  return (
    <div
      className="page-container"
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        overflowY: "auto",
      }}
    >
      <Container
        fixed
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "80vh",
          margin: "auto",
          marginTop: "16px",
        }}
      >
        <Navbar />
        <Box
          sx={{
            padding: "25px",
            bgcolor: "rgb(34, 34, 34)",
            borderColor: "rgb(55, 55, 55)",
            borderWidth: "1px",
            width: "100%",
            minHeight: "90vh",
            borderRadius: "15px",
            marginTop: "1px",
          }}
        >
          <Box
            sx={{
              padding: "15px",
              bgcolor: "rgb(38, 38, 38)",
              borderColor: "rgb(55, 55, 55)",
              borderWidth: "1px",
              width: "100%",
              minHeight: "5vh",
              borderRadius: "15px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography variant="h4" color="white">
              Youtube To Mp3
            </Typography>
            <Typography variant="body1" color="rgb(125, 125, 125)">
              May 10 · 2024
            </Typography>
          </Box>
        </Box>
      </Container>
    </div>
  );
}
