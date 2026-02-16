import { Code } from "@mui/icons-material";
import { BentoCard } from "../../ui/bento-card";
import CardLabelWithIcon from "./card-label-with-icon";
import TechStackCarousel from "../techstack-carousel";

export default function TechStackCard() {
  return (
    <BentoCard heightSize="sm" widthSize="md">
      <CardLabelWithIcon icon={<Code fontSize="small" sx={{ fontSize: 18 }} />}>
        Tech stack
      </CardLabelWithIcon>
      <TechStackCarousel />
    </BentoCard>
  );
}
