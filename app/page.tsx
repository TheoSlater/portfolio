"use client";

import { Container, Box, Avatar } from "@mui/material";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <div
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
          <Container
            fixed
            style={{
              display: "flex",
              alignItems: "center",
              paddingLeft: 0,
              paddingRight: 0,
            }}
          >
            <Avatar
              src="/pfp1.png"
              sx={{
                bgcolor: "rgb(117,117,117)",
                color: "black",
                width: 130,
                height: 130,
                marginRight: "20px",
              }}
            />
            <div>
              <h1 style={{ margin: 0, fontSize: "38px", fontWeight: "600" }}>
                Hello, I&apos;m Theo.
              </h1>
            </div>
          </Container>
          <Container
            fixed
            style={{ paddingLeft: 0, paddingRight: 0, marginTop: "35px" }}
          >
            <p style={{ fontSize: "20px" }}>
              I&apos;m a junior programmer in England where I go to school.
              Although I haven&apos;t had any formal work experience which in
              the area of programming, I have developed an interest in front-end
              development, building apps and websites. I have a passion with
              experimenting and developing new ideas for websites or apps. While
              doing my studies, my times will also be available for freelance
              work. If you are looking for someone to cooperate with on projects
              related to digital space, I will be glad to share how we can join
              forces. If you want to team up with me, I&apos;m all ears, so feel
              free to get in touch
            </p>
          </Container>
        </Box>
      </Container>
    </div>
  );
}
