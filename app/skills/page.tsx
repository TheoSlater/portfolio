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
                  borderRadius: "25px",
                  borderWidth: "1px",
                  borderColor: "rgb(55, 55, 55)",
                  padding: "15px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  overflow: "hidden", // Add this
                }}
              >
                <Image
                  src="/nextJS-Logo.png"
                  alt="Next.js Logo"
                  width={150}
                  height={150}
                  style={{ marginBottom: "15px" }}
                  className="selector"
                />
                <p
                  style={{
                    marginTop: "10px",
                    color: "white",
                    fontWeight: "400",
                  }}
                >
                  Next.js
                </p>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper
                elevation={5}
                sx={{
                  bgcolor: "rgb(48,48,48)",
                  borderRadius: "25px",
                  borderWidth: "1px",
                  borderColor: "rgb(55, 55, 55)",
                  padding: "15px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  overflow: "hidden", // Add this
                }}
              >
                <Image
                  src="/typescript.png"
                  alt="logo"
                  width={150}
                  height={150}
                  style={{ marginBottom: "15px" }}
                  className="selector"
                />
                <p
                  style={{
                    marginTop: "10px",
                    color: "white",
                    fontWeight: "400",
                  }}
                >
                  Typescript
                </p>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper
                elevation={5}
                sx={{
                  bgcolor: "rgb(48,48,48)",
                  borderRadius: "25px",
                  borderWidth: "1px",
                  borderColor: "rgb(55, 55, 55)",
                  padding: "15px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  overflow: "hidden", // Add this
                }}
              >
                <Image
                  src="/javascript.png"
                  alt="logo"
                  width={150}
                  height={150}
                  style={{ marginBottom: "15px" }}
                  className="selector"
                />
                <p
                  style={{
                    marginTop: "10px",
                    color: "white",
                    fontWeight: "400",
                  }}
                >
                  Javascript
                </p>
              </Paper>
            </Grid>
          </Grid>
          <Grid container spacing={3} sx={{ marginBottom: "20px" }}>
            <Grid item xs={4}>
              <Paper
                elevation={5}
                sx={{
                  bgcolor: "rgb(48,48,48)",
                  borderRadius: "25px",
                  borderWidth: "1px",
                  borderColor: "rgb(55, 55, 55)",
                  padding: "15px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  overflow: "hidden", // Add this
                }}
              >
                <Image
                  src="/csharp.png"
                  alt="logo"
                  width={134}
                  height={134}
                  className="selector"
                />
                <p
                  style={{
                    marginTop: "10px",
                    color: "white",
                    fontWeight: "400",
                  }}
                >
                  CSharp
                </p>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper
                elevation={5}
                sx={{
                  bgcolor: "rgb(48,48,48)",
                  borderRadius: "25px",
                  borderWidth: "1px",
                  borderColor: "rgb(55, 55, 55)",
                  padding: "15px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  overflow: "hidden", // Add this
                }}
              >
                <Image
                  src="/python.png"
                  alt="logo"
                  width={150}
                  height={150}
                  className="selector"
                />
                <p
                  style={{
                    marginTop: "10px",
                    color: "white",
                    fontWeight: "400",
                  }}
                >
                  Python
                </p>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper
                elevation={5}
                sx={{
                  bgcolor: "rgb(48,48,48)",
                  borderRadius: "25px",
                  borderWidth: "1px",
                  borderColor: "rgb(55, 55, 55)",
                  padding: "15px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  overflow: "hidden", // Add this
                }}
              >
                <Image
                  src="/mui.png"
                  alt="logo"
                  width={150}
                  height={150}
                  className="selector"
                />
                <p
                  style={{
                    marginTop: "10px",
                    color: "white",
                    fontWeight: "400",
                  }}
                >
                  Material UI
                </p>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}
