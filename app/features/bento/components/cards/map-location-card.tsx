import { Place } from "@mui/icons-material";
import { BentoCard } from "../../ui/bento-card";
import CardLabelWithIcon from "./card-label-with-icon";
import MapLocation from "../map-location";

export default function MapLocationCard() {
  return (
    <BentoCard
      size="sm"
      aspectRatio="1 / 1"
      padding={0}
      sx={{
        overflow: "hidden",
      }}
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
