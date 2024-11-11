"use client";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#f4f4f4",
        color: "#333",
        boxShadow: "none",
      }}
    >
      <Toolbar
        sx={{ display: "flex", justifyContent: "space-between", paddingX: 2 }}
      >
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", fontSize: "1.5rem" }}
        >
          Theo Slater
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            sx={{
              color: "#333",
              fontSize: "1rem",
              paddingX: 2,
              "&:hover": { backgroundColor: "#e0e0e0" },
            }}
          >
            Home
          </Button>
          <Button
            sx={{
              color: "#333",
              fontSize: "1rem",
              paddingX: 2,
              "&:hover": { backgroundColor: "#e0e0e0" },
            }}
          >
            About
          </Button>
          <Button
            sx={{
              color: "#333",
              fontSize: "1rem",
              paddingX: 2,
              "&:hover": { backgroundColor: "#e0e0e0" },
            }}
          >
            Projects
          </Button>
          <Button
            sx={{
              color: "#333",
              fontSize: "1rem",
              paddingX: 2,
              "&:hover": { backgroundColor: "#e0e0e0" },
            }}
          >
            Contact
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
