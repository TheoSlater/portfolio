import { Button, ButtonProps } from "@mui/material";
import styled from "styled-components";

const ColorButton = styled(Button)<ButtonProps>(() => ({
  color: "white",
  backgroundColor: "rgb(48, 48, 48)",
  "&:hover": {
    backgroundColor: "rgb(44, 44, 44)",
  },
}));

export default ColorButton;
