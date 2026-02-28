import type { SxProps, Theme } from "@mui/material";
import { Place } from "@mui/icons-material";
import { BentoCard } from "../../ui/bento-card";
import CardLabelWithIcon from "./card-label-with-icon";
import MapLocation from "../map-location";

interface MapLocationCardProps {
  colSpan?: number;
  rowSpan?: number;
  sx?: SxProps<Theme>;
}

export default function MapLocationCard({
  colSpan,
  rowSpan,
  sx,
}: MapLocationCardProps) {
  return (
    <BentoCard
      size="sm"
      aspectRatio="1 / 1"
      padding={0}
      colSpan={colSpan}
      rowSpan={rowSpan}
      sx={sx}
    >
      <CardLabelWithIcon
        icon={<Place fontSize="small" sx={{ fontSize: 18 }} />}
      >
        Location
      </CardLabelWithIcon>
      <MapLocation />
    </BentoCard>
  );
}
