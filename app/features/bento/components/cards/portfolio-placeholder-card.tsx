import { CollectionsBookmark } from "@mui/icons-material";

import { BentoCard } from "../../../../components/ui/bento-card";
import CardLabelWithIcon from "./card-label-with-icon";

export default function PortfolioPlaceholderCard() {
  return (
    <BentoCard
      size="sm"
    >
      <CardLabelWithIcon
        icon={<CollectionsBookmark fontSize="small" sx={{ fontSize: 18 }} />}
      >
        Portfolio
      </CardLabelWithIcon>
    </BentoCard>
  );
}
