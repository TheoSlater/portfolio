"use client";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Drawer,
  IconButton,
} from "@mui/material";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = ({
  onNavClick,
}: {
  onNavClick: (sectionId: string) => void;
}) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <Box>
      <AppBar
        position="sticky"
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

          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            {/* Regular navigation buttons (hidden on small screens) */}
            <Box sx={{ display: { xs: "none", sm: "flex" } }}>
              <Button
                sx={{
                  color: "#333",
                  fontSize: "1rem",
                  paddingX: 2,
                  "&:hover": { backgroundColor: "#e0e0e0" },
                }}
                onClick={() => onNavClick("about")}
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
                onClick={() => onNavClick("projects")}
              >
                Projects
              </Button>
            </Box>

            {/* Hamburger Menu for mobile */}
            <IconButton
              sx={{ display: { xs: "block", sm: "none" } }}
              onClick={toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer Sidebar for small screens */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={handleDrawerClose}
        sx={{
          "& .MuiDrawer-paper": {
            width: 250,
            paddingTop: "60px", // Adjust for sticky navbar height
          },
        }}
      >
        <Box
          sx={{ display: "flex", flexDirection: "column", gap: 2, padding: 2 }}
        >
          <Button
            sx={{
              color: "#333",
              fontSize: "1rem",
              paddingX: 2,
              "&:hover": { backgroundColor: "#e0e0e0" },
            }}
            onClick={() => {
              onNavClick("about"); // Scroll to About section
              handleDrawerClose(); // Close the drawer after clicking
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
            onClick={() => {
              onNavClick("projects"); // Scroll to Projects section
              handleDrawerClose(); // Close the drawer after clicking
            }}
          >
            Projects
          </Button>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Navbar;
