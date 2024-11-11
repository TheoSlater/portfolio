"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#000" }, // Main black theme color
    secondary: { main: "#008080" }, // Accent color, e.g., teal
    background: { default: "#fff" }, // White background
  },
  typography: {
    fontFamily: "Arial, sans-serif", // Choose a clean sans-serif font
    h1: { fontSize: "2rem", fontWeight: 700 },
    body1: { fontSize: "1rem", lineHeight: 1.6 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 8 }, // Minimal rounded button style
      },
    },
  },
});

export default theme;
