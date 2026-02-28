import type { SxProps, Theme } from "@mui/material";
import { WorkOutline } from "@mui/icons-material";
import { BentoCard } from "../../ui/bento-card";
import CardLabelWithIcon from "./card-label-with-icon";

interface FeaturedWorkCardProps {
  colSpan?: number;
  rowSpan?: number;
  sx?: SxProps<Theme>;
}

export default function FeaturedWorkCard({
  colSpan,
  rowSpan,
  sx,
}: FeaturedWorkCardProps) {
  return (
    <BentoCard widthSize="md" heightSize="sm" colSpan={colSpan} rowSpan={rowSpan} sx={sx}>
      <CardLabelWithIcon
        icon={<WorkOutline fontSize="small" sx={{ fontSize: 18 }} />}
      >
        Featured Work
      </CardLabelWithIcon>
    </BentoCard>
  );
}
