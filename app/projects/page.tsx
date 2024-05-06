import { Container, Box, Stack, Paper } from "@mui/material";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Projects() {
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
            minHeight: "65vh",
            borderRadius: "15px",
            margin: "auto",
          }}
        >
          <h1 style={{ fontSize: "50px", fontWeight: "bold" }}>Projects.</h1>
          <p
            style={{
              fontSize: "20px",
              marginTop: "10px",
              marginBottom: "20px",
            }}
          >
            I like to solve problems and build elegant solutions in my free
            time. Here is some of the open source stuff I&apos;m working/worked
            on.
          </p>
          <Stack spacing={7} direction="row">
            <Box
              sx={{
                bgcolor: "rgb(48,48,48)",
                width: "30%",
                height: "50vh",
                borderColor: "rgb(55,55,55)",
                borderWidth: "1px",
                borderRadius: "15px",
                padding: "20px",
                overflow: "auto", // Add overflow: auto
              }}
            >
              <h1
                style={{
                  fontSize: "20px",
                  fontWeight: "500",
                  marginBottom: "15px",
                  textAlign: "center",
                }}
              >
                This Website
              </h1>
              <Box>
                <Image
                  src={"/pfp1.png"}
                  alt={"PLACEHOLDER"}
                  width={1000}
                  height={1000}
                  style={{
                    borderColor: "rgb(55,55,55)",
                    borderWidth: "1px",
                    borderRadius: "20px",
                    marginBottom: "15px",
                  }}
                ></Image>
                <p style={{ fontSize: "20px" }}>
                  This portfolio is one of my projects introducing my self and
                  my open source projects I work on in my free time. <br />{" "}
                  <br />
                  More in the future?
                </p>
              </Box>
            </Box>
            <Box
              sx={{
                bgcolor: "rgb(48,48,48)",
                width: "30%",
                height: "50vh",
                borderColor: "rgb(55,55,55)",
                borderWidth: "1px",
                borderRadius: "15px",
                padding: "20px",
                overflow: "auto", // Add overflow: auto
              }}
            >
              <h1
                style={{
                  fontSize: "20px",
                  fontWeight: "500",
                  marginBottom: "15px",
                  textAlign: "center",
                }}
              >
                Youtube To Mp3
              </h1>
              <Box>
                <Image
                  src={"/ytmp3.png"}
                  alt={"PLACEHOLDER"}
                  width={1000}
                  height={1000}
                  style={{
                    borderColor: "rgb(55,55,55)",
                    borderWidth: "1px",
                    borderRadius: "20px",
                    marginBottom: "15px",
                  }}
                ></Image>
                <p style={{ fontSize: "20px" }}>
                  A youtube to mp3 converter app programmed in python and allows
                  you to select if you want to download an mp4 or mp3.
                </p>
              </Box>
            </Box>
            <Box
              sx={{
                bgcolor: "rgb(48,48,48)",
                width: "30%",
                height: "50vh",
                borderColor: "rgb(55,55,55)",
                borderWidth: "1px",
                borderRadius: "15px",
                padding: "20px",
                overflow: "auto", // Add overflow: auto
              }}
            >
              <h1
                style={{
                  fontSize: "20px",
                  fontWeight: "500",
                  marginBottom: "15px",
                  textAlign: "center",
                }}
              >
                Coming Soon...
              </h1>
              <Box
                sx={{
                  width: "280px",
                  height: "280px",
                  bgcolor: "black",
                  borderColor: "rgb(55,55,55)",
                  borderWidth: "1px",
                  borderRadius: "20px",
                  marginBottom: "15px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center", // Align vertically
                  flexDirection: "column", // To allow for vertical alignment
                }}
              >
                <h1
                  style={{
                    fontSize: "20px",
                    fontWeight: "500",
                    marginBottom: "15px",
                    textAlign: "center",
                  }}
                >
                  Coming Soon...
                </h1>
                <p style={{ fontSize: "20px" }}></p>
              </Box>
            </Box>
          </Stack>
        </Box>
      </Container>
    </div>
  );
}
