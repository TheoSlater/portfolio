import { WorkOutline } from "@mui/icons-material";
import { BentoCard } from "../../ui/bento-card";
import CardLabelWithIcon from "./card-label-with-icon";

export default function FeaturedWorkCard() {
  return (
    <BentoCard widthSize="md" heightSize="sm">
      <CardLabelWithIcon
        icon={<WorkOutline fontSize="small" sx={{ fontSize: 18 }} />}
      >
        Featured Work
      </CardLabelWithIcon>
    </BentoCard>
  );
}
