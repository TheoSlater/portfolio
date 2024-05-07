"use client";

import { Container, Box, Avatar } from "@mui/material";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";

export default function Contact() {
  return (
    <div
      className="page-container"
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container fixed>
        <Navbar />
        <Box
          sx={{
            padding: "35px",
            bgcolor: "rgb(34, 34, 34)",
            borderColor: "rgb(55, 55, 55)",
            borderWidth: "1px",
            width: "100%",
            minHeight: "32vh",
            borderRadius: "15px",
            margin: "auto",
          }}
        >
          <h1 style={{ fontSize: "50px", fontWeight: "bold" }}>Contact.</h1>
          <p
            style={{
              fontSize: "20px",
              marginTop: "0px",
              marginBottom: "20px",
            }}
          >
            Here are some ways to get in contact with me...
          </p>
        </Box>
      </Container>
    </div>
  );
}
