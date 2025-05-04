"use client";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import {
  createTheme,
  CssBaseline,
  Fab,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material";
import { Roboto } from "next/font/google";
import { ThemeProvider } from "./ThemeContext";
import { useTheme } from "./ThemeContext";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

function ThemedApp({ children }: { children: React.ReactNode }) {
  const { mode, toggleTheme } = useTheme();

  const theme = createTheme({
    palette: {
      mode,
      background: {
        default: mode === "dark" ? "#000000" : "#ffffff",
        paper: mode === "dark" ? "#121212" : "#f5f5f5",
      },
      primary: {
        main: mode === "dark" ? "#ffffff" : "#000000",
      },
      divider:
        mode === "dark" ? "rgba(255, 255, 255, 0.12)" : "rgba(0, 0, 0, 0.12)",
    },
    components: {
      MuiContainer: {
        styleOverrides: {
          root: {
            backgroundColor: mode === "dark" ? "#000000" : "#ffffff",
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          root: {
            color: mode === "dark" ? "#ffffff" : "#000000",
          },
        },
      },
      MuiSvgIcon: {
        styleOverrides: {
          root: {
            color: mode === "dark" ? "#ffffff" : "#000000",
          },
        },
      },
    },
  });

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Fab
        size="small"
        onClick={toggleTheme}
        sx={{
          position: "fixed",
          bottom: 16,
          right: 16,
          bgcolor: mode === "dark" ? "primary.light" : "primary.dark",
          color: mode === "dark" ? "black" : "white",
        }}
      >
        {mode === "dark" ? <Brightness7 /> : <Brightness4 />}
      </Fab>
      {children}
    </MuiThemeProvider>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ThemeProvider>
          <ThemedApp>{children}</ThemedApp>
        </ThemeProvider>
      </body>
    </html>
  );
}
