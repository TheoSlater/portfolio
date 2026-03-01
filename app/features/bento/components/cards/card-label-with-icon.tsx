import { Box } from "@mui/material";
import type { ReactNode } from "react";
import CardLabel, { type CardLabelLocation } from "../../ui/card-label";

interface CardLabelWithIconProps {
  icon: ReactNode;
  children: ReactNode;
  location?: CardLabelLocation;
}

export default function CardLabelWithIcon({
  icon,
  children,
  location,
}: CardLabelWithIconProps) {
  return (
    <CardLabel location={location}>
      <Box
        component="span"
        sx={{ display: "inline-flex", alignItems: "center", gap: 1 }}
      >
        {icon}
        {children}
      </Box>
    </CardLabel>
  );
}
