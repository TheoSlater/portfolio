import { Chip, type ChipProps } from "@mui/material";

export default function UniversalChip(props: ChipProps) {
  return (
    <Chip
      {...props}
      sx={[
        {
          alignItems: "center",
          borderRadius: "9999px",
          ".MuiChip-label": {
            display: "inline-flex",
            alignItems: "center",
          },
        },
        ...(Array.isArray(props.sx) ? props.sx : props.sx ? [props.sx] : []),
      ]}
    />
  );
}
