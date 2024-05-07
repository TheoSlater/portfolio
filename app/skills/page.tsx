"use client";

import { Container, Box, Avatar, Paper, Grid, Stack } from "@mui/material";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";

export default function Skills() {
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
            minHeight: "55vh",
            borderRadius: "15px",
            margin: "auto",
          }}
        >
          <h1
            style={{
              color: "rgb(110, 110, 110)",
              fontSize: "20px",
              marginBottom: "2px",
              letterSpacing: "1px",
            }}
          >
            SKILLS
          </h1>
          <h1
            style={{
              fontSize: "28px",
              fontWeight: "550",
              marginBottom: "20px",
            }}
          >
            My Core Technologies
          </h1>
          <Grid container spacing={3} sx={{ marginBottom: "20px" }}>
            <Grid item xs={4}>
              <Paper
                elevation={5}
                sx={{
                  bgcolor: "rgb(48,48,48)",
                  height: "20vh",
                  borderRadius: "25px",
                  borderWidth: "1px",
                  borderColor: "rgb(55, 55, 55)",
                }}
              />
            </Grid>
            <Grid item xs={4}>
              <Paper
                elevation={5}
                sx={{
                  bgcolor: "rgb(48,48,48)",
                  height: "20vh",
                  borderRadius: "25px",
                  borderWidth: "1px",
                  borderColor: "rgb(55, 55, 55)",
                }}
              />
            </Grid>
            <Grid item xs={4}>
              <Paper
                elevation={5}
                sx={{
                  bgcolor: "rgb(48,48,48)",
                  height: "20vh",
                  borderRadius: "25px",
                  borderWidth: "1px",
                  borderColor: "rgb(55, 55, 55)",
                }}
              />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <Paper
                elevation={5}
                sx={{
                  bgcolor: "rgb(48,48,48)",
                  height: "20vh",
                  borderRadius: "25px",
                  borderWidth: "1px",
                  borderColor: "rgb(55, 55, 55)",
                }}
              />
            </Grid>
            <Grid item xs={4}>
              <Paper
                elevation={5}
                sx={{
                  bgcolor: "rgb(48,48,48)",
                  height: "20vh",
                  borderRadius: "25px",
                  borderWidth: "1px",
                  borderColor: "rgb(55, 55, 55)",
                }}
              />
            </Grid>
            <Grid item xs={4}>
              <Paper
                elevation={5}
                sx={{
                  bgcolor: "rgb(48,48,48)",
                  height: "20vh",
                  borderRadius: "25px",
                  borderWidth: "1px",
                  borderColor: "rgb(55, 55, 55)",
                }}
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}
