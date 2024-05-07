"use client";

import {
  Box,
  Button,
  ButtonProps,
  IconButton,
  Stack,
  styled,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "next/link";
import ColorButton from "./ColorButton";

export default function Navbar() {
  return (
    <Box
      sx={{
        bgcolor: "rgb(34, 34, 34)",
        borderColor: "rgb(55, 55, 55)",
        borderWidth: "1px",
        width: "100%",
        height: "60px",
        borderRadius: "14px",
        marginBottom: "15px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "5px",
      }}
    >
      <Stack spacing={1} direction="row" sx={{ flexGrow: 1 }}>
        <Link href={"/"} passHref>
          <ColorButton
            style={{ height: "48px", width: "100px", borderRadius: "12px" }}
          >
            Home
          </ColorButton>
        </Link>
        <Link href={"/projects"} passHref>
          <ColorButton
            style={{ height: "48px", width: "100px", borderRadius: "12px" }}
          >
            Projects
          </ColorButton>
        </Link>
        <Link href={"/contact"} passHref>
          <ColorButton
            style={{ height: "48px", width: "100px", borderRadius: "12px" }}
          >
            Contact
          </ColorButton>
        </Link>
      </Stack>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          height: "48px",
          bgcolor: "rgb(48,48,48)",
          borderRadius: "15px",
        }}
      >
        <Stack spacing={0} direction="row">
          <IconButton
            style={{ color: "white" }}
            onClick={() =>
              window.open("https://github.com/TheoSlater", "_blank")
            }
          >
            <GitHubIcon />
          </IconButton>
          <IconButton style={{ color: "white" }}>
            <LinkedInIcon></LinkedInIcon>
          </IconButton>
          <IconButton style={{ color: "white" }}>
            <MailIcon></MailIcon>
          </IconButton>
        </Stack>
      </Box>
    </Box>
  );
}
