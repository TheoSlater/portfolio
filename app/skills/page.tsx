"use client";

import { Container, Box, Paper, Grid } from "@mui/material";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import Image from "next/image";

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

                  padding: "15px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  src="/nextJS-Logo.png"
                  alt="Next.js Logo"
                  width={150}
                  height={150}
                  style={{ marginBottom: "15px" }}
                />
                <p style={{ marginTop: "10px", color: "white" }}>NEXT.JS</p>
              </Paper>
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
                  padding: "15px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  src="/typescript.png"
                  alt="logo"
                  width={150}
                  height={150}
                  style={{ marginBottom: "15px" }}
                />
                <p style={{ marginTop: "10px", color: "white" }}>TYPESCRIPT</p>
              </Paper>
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
                  padding: "15px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  src="/javascript.png"
                  alt="logo"
                  width={150}
                  height={150}
                  style={{ marginBottom: "15px" }}
                />
                <p style={{ marginTop: "10px", color: "white" }}>JAVASCRIPT</p>
              </Paper>
            </Grid>
          </Grid>
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
                  padding: "15px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image src="/" alt="logo" width={80} height={80} />
                <p style={{ marginTop: "10px", color: "white" }}>PLACEHOLDER</p>
              </Paper>
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
                  padding: "15px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image src="/" alt="logo" width={80} height={80} />
                <p style={{ marginTop: "10px", color: "white" }}>PLACEHOLDER</p>
              </Paper>
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
                  padding: "15px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image src="/" alt="logo" width={80} height={80} />
                <p style={{ marginTop: "10px", color: "white" }}>PLACEHOLDER</p>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}
