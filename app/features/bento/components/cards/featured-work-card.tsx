import type { SxProps, Theme } from "@mui/material";
import { AutoAwesome } from "@mui/icons-material";
import { BentoCard } from "../../ui/bento-card";
import CardLabelWithIcon from "./card-label-with-icon";
import DesktopCopilotPreview from "../desktop-copilot-preview";

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
    <BentoCard
      widthSize="md"
      heightSize="sm"
      colSpan={colSpan}
      rowSpan={rowSpan}
      sx={[
        {
          overflow: "hidden",
          height: "100%",
          minHeight: 0,
          display: "flex",
          flexDirection: "column",
        },
        ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
      ]}
    >
      <CardLabelWithIcon
        icon={<AutoAwesome fontSize="small" sx={{ fontSize: 18 }} />}
      >
        Desktop Copilot
      </CardLabelWithIcon>
      <DesktopCopilotPreview />
    </BentoCard>
  );
}
