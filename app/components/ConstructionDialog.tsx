"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
import BuildRoundedIcon from "@mui/icons-material/BuildRounded";

export default function ConstructionDialog() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const dismissed = localStorage.getItem("construction-dialog-dismissed");
    if (!dismissed) {
      setOpen(true);
    }
  }, []);

  const handleEnter = () => {
    localStorage.setItem("construction-dialog-dismissed", "true");
    setOpen(false);
  };

  // Prevent hydration mismatch - don't render until mounted
  if (!mounted) return null;

  return (
    <Dialog
      open={open}
      onClose={handleEnter}
      PaperProps={{
        sx: {
          backgroundColor: "rgba(30, 41, 59, 0.6)",
          border: "1px solid rgba(255, 255, 255, 0.12)",
          borderRadius: "24px",
          backdropFilter: "blur(12px)",
          color: "#ffffff",
        },
      }}
    >
      <DialogTitle
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1.5,
          fontSize: "1.5rem",
          fontWeight: 500,
        }}
      >
        <BuildRoundedIcon sx={{ color: "rgba(226, 232, 240, 0.9)" }} />
        Under Construction
      </DialogTitle>
      <DialogContent>
        <DialogContentText
          sx={{
            color: "rgba(197, 198, 206, 0.9)",
            fontSize: "1rem",
          }}
        >
          This website is currently under construction. Would you like to enter
          anyway?
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{ px: 3, pb: 3 }}>
        <Button
          onClick={handleEnter}
          variant="contained"
          sx={{
            backgroundColor: "#60e6d7",
            color: "#0b0b0c",
            fontWeight: 600,
            borderRadius: "12px",
            px: 4,
            "&:hover": {
              backgroundColor: "#4dd9c7",
            },
          }}
        >
          Enter Site
        </Button>
      </DialogActions>
    </Dialog>
  );
}
