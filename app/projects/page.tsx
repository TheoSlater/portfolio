"use client";

import { Container, Box, Stack, Paper, Button } from "@mui/material";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import Image from "next/image";
import ColorButton from "../components/ColorButton";
import Link from "next/link";

export default function Projects() {
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
                overflow: "auto",
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
                  my open source projects I work on in my free time.
                </p>
                <Link href={"/"} passHref>
                  <Button
                    component="a"
                    href="/"
                    sx={{
                      marginTop: "10px",
                      bgcolor: "rgb(60,60,60)",
                      color: "white",
                      height: "50px",
                      width: "150px",
                      borderRadius: "15px",
                      "&:hover": {
                        backgroundColor: "rgb(44, 44, 44)",
                      },
                    }}
                  >
                    Learn More
                  </Button>
                </Link>
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
                overflow: "auto",
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
                <p style={{ fontSize: "20px", marginBottom: "10px" }}>
                  A youtube to mp3 converter app programmed in python and allows
                  you to select if you want to download an mp4 or mp3.
                </p>
                <Stack direction="row" spacing={1}>
                  <Button
                    sx={{
                      bgcolor: "rgb(60,60,60)",
                      color: "white",
                      height: "50px",
                      width: "150px",
                      borderRadius: "15px",
                      "&:hover": {
                        backgroundColor: "rgb(44, 44, 44)",
                      },
                    }}
                    onClick={() =>
                      window.open(
                        "https://github.com/TheoSlater/YoutubeToMp3-Mp4/releases",
                        "_blank"
                      )
                    }
                  >
                    Download
                  </Button>
                  <Link href={"/blogs/ytmp3"} passHref>
                    <Button
                      sx={{
                        bgcolor: "rgb(60,60,60)",
                        color: "white",
                        height: "50px",
                        width: "150px",
                        borderRadius: "15px",
                        "&:hover": {
                          backgroundColor: "rgb(44, 44, 44)",
                        },
                      }}
                    >
                      Learn More
                    </Button>
                  </Link>
                </Stack>
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
                overflow: "auto",
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
                  alignItems: "center",
                  flexDirection: "column",
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
