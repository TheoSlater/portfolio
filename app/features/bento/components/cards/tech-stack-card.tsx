import type { SxProps, Theme } from "@mui/material";
import { Code } from "@mui/icons-material";
import { BentoCard } from "../../ui/bento-card";
import CardLabelWithIcon from "./card-label-with-icon";
import TechStackCarousel from "../techstack-carousel";

interface TechStackCardProps {
  colSpan?: number;
  rowSpan?: number;
  sx?: SxProps<Theme>;
}

export default function TechStackCard({
  colSpan,
  rowSpan,
  sx,
}: TechStackCardProps) {
  return (
    <BentoCard heightSize="sm" widthSize="md" colSpan={colSpan} rowSpan={rowSpan} sx={sx}>
      <CardLabelWithIcon icon={<Code fontSize="small" sx={{ fontSize: 18 }} />}>
        Tech stack
      </CardLabelWithIcon>
      <TechStackCarousel />
    </BentoCard>
  );
}
